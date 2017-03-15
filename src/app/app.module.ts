import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Whoisitfor } from '../pages/whoisitfor/whoisitfor';
import { Howlonghaveyoubeen } from '../pages/howlonghaveyoubeen/howlonghaveyoubeen';
import { Isitpartfriend } from '../pages/isitpartfriend/isitpartfriend';
import { Storage } from '@ionic/storage';
import { Howdotheyspendtheirweekends } from '../pages/howdotheyspendtheirweekends/howdotheyspendtheirweekends';
import { Christmashamper } from "../pages/christmashamper/christmashamper";
import { Coffeetablebook } from "../pages/coffeetablebook/coffeetablebook";
import {WhatsyourapproachPage} from "../pages/whatsyourapproach/whatsyourapproach";
import {TicketsPage} from "../pages/tickets/tickets";
import {DotheydrinkPage} from "../pages/dotheydrink/dotheydrink";
import {AretheymalefemalePage} from "../pages/aretheymalefemale/aretheymalefemale";
import {AlcoholicgiftboxPage} from "../pages/alcoholicgiftbox/alcoholicgiftbox";
import {GroomingkitPage} from "../pages/groomingkit/groomingkit";
import {HomefragnancePage} from "../pages/homefragnance/homefragnance";
import {EducationaltoyPage} from "../pages/educationaltoy/educationaltoy";
import {HungoverPage} from "../pages/hungover/hungover";
import {IsitapresentforababyPage} from "../pages/isitapresentforababy/isitapresentforababy";
import {PetPage} from "../pages/pet/pet";
import {FitnessgiftPage} from "../pages/fitnessgift/fitnessgift";
import {PethamperPage} from "../pages/pethamper/pethamper";
import {IsitachildPage} from "../pages/isitachild/isitachild";
import {TheyarePage} from "../pages/theyare/theyare";
import {FrozenPage} from "../pages/frozen/frozen";
import {ToyshooterPage} from "../pages/toyshooter/toyshooter";
import {OutthedoorPage} from "../pages/outthedoor/outthedoor";
import {OutdoorgadgetPage} from "../pages/outdoorgadget/outdoorgadget";
import {GardengiftPage} from "../pages/gardengift/gardengift";
import {WhatsthebudgetPage} from "../pages/whatsthebudget/whatsthebudget";
import {NoveltygiftPage} from "../pages/noveltygift/noveltygift";
import {TabsPage} from "../pages/tabs/tabs";
import {GiftlistPage} from "../pages/giftlist/giftlist";
import { Data } from '../providers/data';




@NgModule({
  declarations: [
    MyApp,
    Home,
    Whoisitfor,
    Howlonghaveyoubeen,
    Isitpartfriend,

    Howdotheyspendtheirweekends,
    Christmashamper,
    Coffeetablebook,
    WhatsyourapproachPage,
    TicketsPage,
    DotheydrinkPage,
    AretheymalefemalePage,
    AlcoholicgiftboxPage,
    GroomingkitPage,
    HomefragnancePage,
    EducationaltoyPage,
    HungoverPage,
    IsitapresentforababyPage,
    PetPage,
    FitnessgiftPage,
    PethamperPage,
    IsitachildPage,
    TheyarePage,
    FrozenPage,
    ToyshooterPage,
    OutthedoorPage,
    OutdoorgadgetPage,
    GardengiftPage,
    WhatsthebudgetPage,
    NoveltygiftPage,
    TabsPage,
    GiftlistPage




  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Whoisitfor,
    Howlonghaveyoubeen,
    Isitpartfriend,

    Howdotheyspendtheirweekends,
    Christmashamper,
    Coffeetablebook,
    WhatsyourapproachPage,
    TicketsPage,
    DotheydrinkPage,
    AretheymalefemalePage,
    AlcoholicgiftboxPage,
    GroomingkitPage,
    HomefragnancePage,
    EducationaltoyPage,
    HungoverPage,
    IsitapresentforababyPage,
    PetPage,
    FitnessgiftPage,
    PethamperPage,
    IsitachildPage,
    TheyarePage,
    FrozenPage,
    ToyshooterPage,
    OutthedoorPage,
    OutdoorgadgetPage,
    GardengiftPage,
    WhatsthebudgetPage,
    NoveltygiftPage,
    TabsPage,
    GiftlistPage



  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage, Data]
})
export class AppModule {}



