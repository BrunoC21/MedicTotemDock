import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutGlobalService {
  private rutHomeKey = '';
  private dvHomeKey = '';
  private rutKey = '';
  private dvKey = '';
  private rut2Key = '';
  private dv2Key = '';
  private rut4Key = '';
  private dv4Key = '';
  private rut5Key = '';
  private dv5Key = '';

  constructor() { }

  setHomeRut(rut: string): void {
    localStorage.setItem(this.rutHomeKey, rut);
  }

  getHomeRut(): string {
    return localStorage.getItem(this.rutHomeKey) || '';
  }

  setHomeDv(dv: string): void {
    localStorage.setItem(this.dvHomeKey, dv);
  }

  getHomeDv(): string {
    return localStorage.getItem(this.dvHomeKey) || '';
  }

  setRut(rut: string): void {
    localStorage.setItem(this.rutKey, rut);
  }

  getRut(): string {
    return localStorage.getItem(this.rutKey) || '';
  }

  setDv(dv: string): void {
    localStorage.setItem(this.dvKey, dv);
  }

  getDv(): string {
    return localStorage.getItem(this.dvKey) || '';
  }
  
  setRut2(rut: string): void {
    localStorage.setItem(this.rut2Key, rut);
  }

  getRut2(): string {
    return localStorage.getItem(this.rut2Key) || '';
  }

  setDv2(dv: string): void {
    localStorage.setItem(this.dv2Key, dv);
  }

  getDv2(): string {
    return localStorage.getItem(this.dv2Key) || '';
  }

  setRut4(rut: string): void {
    localStorage.setItem(this.rut4Key, rut);
  }

  getRut4(): string {
    return localStorage.getItem(this.rut4Key) || '';
  }

  setDv4(dv: string): void {
    localStorage.setItem(this.dv4Key, dv);
  }

  getDv4(): string {
    return localStorage.getItem(this.dv4Key) || '';
  }

  setRut5(rut: string): void {
    localStorage.setItem(this.rut5Key, rut);
  }

  getRut5(): string {
    return localStorage.getItem(this.rut5Key) || '';
  }

  setDv5(dv: string): void {
    localStorage.setItem(this.dv5Key, dv);
  }

  getDv5(): string {
    return localStorage.getItem(this.dv5Key) || '';
  }

}
