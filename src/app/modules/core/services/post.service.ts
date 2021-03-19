import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreModule } from '../core.module';
import { Observable } from 'rxjs';
import { IPost } from '../../post/interfaces/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: CoreModule,
})
export class PostService {
  private path = environment.BACKEND.BASEURL;

  constructor(private http: HttpClient) {}

  retrievePosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${this.path}/posts`);
  }

  createPost(post: IPost): Observable<null> {
    return this.http.post<null>(`${this.path}/posts`, post);
  }
}
