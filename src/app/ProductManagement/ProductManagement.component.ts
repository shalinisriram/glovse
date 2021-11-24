import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-ProductManagement',
  templateUrl: './ProductManagement.component.html',
  styleUrls: ['./ProductManagement.component.css']
})
export class ProductManagementComponent implements OnInit {

  value:any
  isAdd:any=false
  qrcodeData:any={
    'batchno':'',
    'maxLeack':'',
    'humidity':'',
    'temp':'',
    'conductivity':''
  }
  constructor() { }

  ngOnInit() {
  }

  valueAssigned()
  {
    // this.value = (<HTMLInputElement>document.getElementById("Number")).value;
     this.value = this.qrcodeData.batchno;
    localStorage.setItem("batchno",this.qrcodeData.batchno)
    localStorage.setItem("maxLeack",this.qrcodeData.maxLeack)
    localStorage.setItem("humidity",this.qrcodeData.humidity)
    localStorage.setItem("temp",this.qrcodeData.temp)
    localStorage.setItem("conductivity",this.qrcodeData.conductivity)

  }
  downloadImage(){

    const image = html2canvas(<HTMLCanvasElement>document.querySelector('#qrcode')).then(
      canvas => FileSaver.saveAs(canvas.toDataURL(), this.value)
    );
   }
}

