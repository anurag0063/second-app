import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent { 
	//custom property for the mw-media-item
	@Input() mediaItem;
	@Output() delete = new EventEmitter();

	onDelete(){
		//this will send the mediaItem property whenever the click event is happened
		this.delete.emit(this.mediaItem);
		//console.log("Deleted");
	}
}