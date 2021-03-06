import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatExpansionModule} from '@angular/material';
  import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostServices} from './post/post.service';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [PostServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
