import { HttpAdapter } from '../interfaces/http-adapter.interface';
import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async delete<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.delete<T>(url);
      return data;
    } catch (error) {
      throw new Error('This is an error - Chekc logs');
    }
  }

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      throw new Error('This is an error - Chekc logs');
    }
  }

  async patch<T>(url: string, body: any): Promise<T> {
    try {
      const { data } = await this.axios.patch<T>(url, body);
      return data;
    } catch (error) {
      throw new Error('This is an error - Chekc logs');
    }
  }

  async post<T>(url: string, body: any): Promise<T> {
    try {
      const { data } = await this.axios.post<T>(url, body);
      return data;
    } catch (error) {
      throw new Error('This is an error - Chekc logs');
    }
  }

  async put<T>(url: string, body: any): Promise<T> {
    try {
      const { data } = await this.axios.put<T>(url, body);
      return data;
    } catch (error) {
      throw new Error('This is an error - Chekc logs');
    }
  }
}
