import { Injectable } from '@angular/core';
import Albums from './albums.json';

export interface AlbumSchema
{
  id         : string;
  stockID    : string;
  position   : string;
  count      : number;
  camera     : string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService
{
  private static idToURI(albumID: string, photoID: number, preview: boolean) : string
  {
    return `../../assets/albums/${ preview ? 'preview' : 'original' }/${albumID}/${photoID}.jpg`;
  }

  public static getAll() : Array<AlbumSchema> { return Albums; }
  public static getFromID(id: string) : AlbumSchema | undefined { return Albums.find(e => e.id === id); }

  public static getPhotosURIs(albumSchema: AlbumSchema, preview: boolean) : Array<string>
  {
    const uris = Array(albumSchema.count).fill('');
    uris.map((value, index, arr) => { arr[index] = this.idToURI(albumSchema.id, index, preview); });

    return uris;
  }
}
