


import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fontFamily } from 'html2canvas/dist/types/css/property-descriptors/font-family';
import { fontStyle } from 'html2canvas/dist/types/css/property-descriptors/font-style';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-CustomerManagement',
  templateUrl: './CustomerManagement.component.html',
  styleUrls: ['./CustomerManagement.component.css']
})
export class CustomerManagementComponent implements OnInit {
  isScanner= false
  QrResults:any=''
  value1:any='123'
  elementType = 'url';
   magePath:any;
  value : any;
  @ViewChild('result') resultElement: any;
  showQRCode: boolean = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  Scanner()
  {
    this.isScanner = true;
  }

  onCodeResult(resut:string)
  {
    this.QrResults = resut;
  }
  onCamerasNotFound(error: Error) {
    console.log(error);
  }

  downloadAsPDF()
  {
    localStorage.getItem("batchno")
    localStorage.getItem("maxLeack")
    localStorage.getItem("humidity")
    localStorage.getItem("temp")
    localStorage.getItem("conductivity")
    var data = []
    var col = ["Max Leak mA","Temp","Humidity %","Conductivity (µS/cm)"];
    var row =[localStorage.getItem("maxLeack"),localStorage.getItem("temp"),localStorage.getItem("humidity"),localStorage.getItem("conductivity")]
    data.push(row)
    const doc = new jsPDF();
    doc.addImage("..//../assets/logo-raychem.png", 'JPEG', 20, 10,80,10);
    doc.setFontSize(14);
    doc.setFont("","bold")
    doc.text("CERTIFICATE of ACCORDANCE", 65, 30);
    doc.setFontSize(12);
    doc.setFont("","")

    doc.text("Batch Number : "+localStorage.getItem("batchno"), 15,  43);
    var d = new Date()
    doc.text("Date : "+d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() ,166,  43);
    autoTable(doc,{head:[col],body:[row],styles: {  },margin: { top: 47 }, theme: 'plain', bodyStyles:{lineWidth: 0.1, lineColor: [0, 0, 0]},
   headStyles:{lineWidth: 0.1, lineColor: [0, 0, 0],fontStyle:'bold',fillColor: [255, 255, 255],textColor:[0,0,0]}})
    doc.save('report'+'.pdf');
  }

  preview(files:any) {
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      alert("Only images are supported.");
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.value = reader.result;
      console.log(reader.result);
      this.showQRCode = true;

    }
  }
  render(e:any) {
    let element: Element = this.renderer.createElement('h1');
    element.innerHTML = e.result;
    this.renderElement(element);
  }
  renderElement(element:any) {
    console.log(element);

    for (let node of this.resultElement.nativeElement.childNodes) {
      this.renderer.removeChild(this.resultElement.nativeElement, node);
    }
    this.renderer.appendChild(this.resultElement.nativeElement, element);
  }
}

