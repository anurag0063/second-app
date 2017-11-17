import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent {
	form;

	ngOnInit(){
		this.form = new FormGroup({
			medium: new FormControl('Movies'),
			//if you have more than one validation put everything under validation.compose
			name: new FormControl('', Validators.compose([
				Validators.pattern('[\\w\\-\\s\\/]+'), 
				Validators.required
				])),
			category: new FormControl(''),
			year: new FormControl('', this.yearValidator)
		})


	}

	yearValidator(control) {
			if (control.value.trim().length === 0){
				return null;
			}
			let year = parseInt(control.value);
			const min = 1921, max = 2100;
			if(year >= min && year <= max) {
				return null;
			}else {
				return { 'year': {
					minYear: min,
					maxYear: max
				}};
			}
		}

	onSubmit(mediaItem) {
		console.log(mediaItem);
	}
}