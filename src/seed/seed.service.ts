import { Injectable } from '@nestjs/common';
import { PokeAPIResponse } from './interface/poke-api-response.interface';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  //Opción 1
  async executeSeed(): Promise<string> {
    this.pokemonModel.deleteMany({});
    const pokemonToInsert: { name: string; no: number }[] = [];
    let nextUrl: string = 'https://pokeapi.co/api/v2/pokemon?limit=50';

    while (nextUrl !== null) {
      const data = await this.http.get<PokeAPIResponse>(nextUrl);
      nextUrl = data.next;

      data.results.forEach(({ name, url }) => {
        const segments = url.split('/');
        const no = +segments[segments.length - 2];
        pokemonToInsert.push({ no, name });
      });
    }

    await this.pokemonModel.insertMany(pokemonToInsert);
    return 'Seed executed';
  }

  //Opción 2
  /*
  async executeSeed(): Promise<Result[]> {
    this.pokemonModel.deleteMany({});
    let nextUrl: string = 'https://pokeapi.co/api/v2/pokemon?limit=50';


    while (nextUrl !== null) {
      const data = await this.http.get<PokeAPIResponse>(nextUrl);
      nextUrl = data.next;

      const pokemonToInsert: Promise<any>[] = [];

      data.results.forEach(({ name, url }) => {
        const segments = url.split('/');
        const no = +segments[segments.length - 2];
        pokemonToInsert.push(this.pokemonModel.create({ no, name }));
      });
    }
    await Promise.all(pokemonToInsert);
    return 'Seed executed';
  }
  */
}
