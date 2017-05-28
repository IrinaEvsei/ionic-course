import { Component }          from "@angular/core";
import { HomePage }           from "../home/home";
import { UserPage }           from "../user/user";

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  homeTab = HomePage;
  userTab = UserPage;
  
  constructor() {}
}