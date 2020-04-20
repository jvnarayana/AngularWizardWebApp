import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes  } from '@angular/router';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { SkillsDetailsComponent } from '../skills-details/skills-details.component';
import { WorkExpDetailsComponent } from '../work-exp-details/work-exp-details.component';
import { PageNotFoundComponentComponent } from '../page-not-found-component/page-not-found-component.component';


const routes:Routes=[
{
  path:"PersonalDetails",component:PersonalDetailsComponent
  
  
},
{
path:"ContactDetails",component:ContactDetailsComponent

},
{
 path:"SkillsDetails", component:SkillsDetailsComponent 
},
{
  path:"WorkExpDeatils",component:WorkExpDetailsComponent
},
{
  path:"", redirectTo:'/PersonalDetails', pathMatch:'full'
},
{
  path:"**",component:PageNotFoundComponentComponent
  
}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],

  
})
export class AppRoutingModule { }
