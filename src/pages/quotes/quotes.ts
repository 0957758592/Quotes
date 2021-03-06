import { Component, OnInit } from '@angular/core';
import {NavParams, AlertController} from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

import {QuotesService} from '../../services/quotes'

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
quoteGroup:{category: string, quotes: Quote[], icon:string}  ;
constructor(
  private navParams: NavParams,  
  private alertCtrl: AlertController,
  private quotesService: QuotesService  ){}

// ionViewDidLoad(){
//  this.quoteGroup = this.navParams.data;
// Add elvis  operatopr (?) in template to use this approach
// }

ngOnInit(){
  this.quoteGroup = this.navParams.data;
}

onAddToFavoriites(selectedQuote: Quote){
const alert = this.alertCtrl.create({
  title: "Add Quote",
  subTitle:'Are you sure?',
  message: 'Are you sure to add the quote?', 
// buttons: ['ok']
buttons: [{
  text: 'Yes, go ahead!',
  handler: () => {this.quotesService.addQuoteToFavorites(selectedQuote);}
},
{
  text: 'No, I changed my mind',
  role:  'cancel',
  handler: () => {console.log('Cancelled');}
}
]
});
alert.present();
}

onRemoveFromFavorites(quote: Quote){
this.quotesService.removeQuoteFromFavorites(quote);
}

isFavorite(quote: Quote){
  return  this.quotesService.isQuoteFaforite(quote);
}

}
