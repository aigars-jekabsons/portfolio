import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { BodyIntroComponent } from './body-partials/body-intro/body-intro.component';
import { BodyPeriodicTableComponent } from './body-partials/body-periodic-table/body-periodic-table.component';
import { BodyAchievementsComponent } from './body-partials/body-achievements/body-achievements.component';
import { BodyPortfolioComponent } from './body-partials/body-portfolio/body-portfolio.component';
import { BodyContactmeComponent } from './body-partials/body-contactme/body-contactme.component';
import { BodyPortfolioItemComponent } from './body-partials/body-portfolio-item/body-portfolio-item.component';
import { ArrayFixPipe } from './pipes/ArrayFix/array-fix.pipe';
import { CarouselModule } from 'ngx-bootstrap';
import { SquashComponent } from './squash/squash.component';
import { PageNotFound } from './404/404.component';
import { appRoutes } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { BodyGamesComponent } from './body-partials/body-games/body-games.component';
import { BodyLightboxComponent } from './body-partials/body-lightbox/body-lightbox.component';
import { SafeIframePipe } from './pipes/safe-iframe/safe-iframe.pipe';
import { SnakeComponent } from './snake/snake.component';
import { FooterComponent } from './footer/footer.component';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    BodyIntroComponent,
    BodyPeriodicTableComponent,
    BodyAchievementsComponent,
    BodyPortfolioComponent,
    BodyContactmeComponent,
    BodyPortfolioItemComponent,
    ArrayFixPipe,
    SquashComponent,
    PageNotFound,
    HeaderComponent,
    BodyGamesComponent,
    BodyLightboxComponent,
    SafeIframePipe,
    SnakeComponent,
    FooterComponent,
    MinesweeperComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    Ng2PageScrollModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(appRoutes, { useHash: false, preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
