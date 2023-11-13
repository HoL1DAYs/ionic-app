import {Component, OnInit} from '@angular/core';
import {Contacts} from "@capacitor-community/contacts";
import {BarcodeFormat, BarcodeScanner} from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {
  contacts: any[] = []
  permission: any
  barcodePermissions: any
  scanActive: boolean = false
  contact: any

  constructor() {
    Contacts.requestPermissions().then(result=>{
      this.permission = result
    })
    this.LoadContacts()
    this.checkPermissions().then(result=>{
      this.barcodePermissions = result
    })
  }

  ngOnInit() {

  }
  // @ts-ignore
  removeBackround(e){
    e.classList.add('test')
  }

  async LoadContacts(){
    try{
      this.permission = await Contacts.requestPermissions()
      Contacts.getContacts({
        projection: {
          name: true,
          phones: true
        },
      }).then(results=>{
        this.contacts = results.contacts
      })

    }catch (e){
      console.log(e)
    }

  }

  startScan = async () => {
    this.scanActive = true
    document.querySelector('body')?.classList.add('barcode-scanner-active');

    // Add the `barcodeScanned` listener
    const listener = await BarcodeScanner.addListener(
      'barcodeScanned',
      async result => {
        alert(result.barcode.displayValue);
      },
    );

    // Start the barcode scanner
    await BarcodeScanner.startScan();
  };

  stopScan = async () => {
    // Make all elements in the WebView visible again
    document.querySelector('body')?.classList.remove('barcode-scanner-active');

    // Remove all listeners
    await BarcodeScanner.removeAllListeners();

    // Stop the barcode scanner
    await BarcodeScanner.stopScan();
    this.scanActive = false
  };

  scanSingleBarcode = async () => {
    return new Promise(async resolve => {
      document.querySelector('body')?.classList.add('barcode-scanner-active');
      this.scanActive = true
      const listener = await BarcodeScanner.addListener(
        'barcodeScanned',
        async result => {
          await listener.remove();
          document
            .querySelector('body')
            ?.classList.remove('barcode-scanner-active');
          await BarcodeScanner.stopScan();
          this.scanActive = false
          alert(result.barcode.displayValue);
          resolve(result.barcode);
        },
      );
      await BarcodeScanner.startScan();
    });
  };

  scan = async () => {
    const { barcodes } = await BarcodeScanner.scan({
      formats: [BarcodeFormat.QrCode],
    });
    return barcodes;
  };

  isSupported = async () => {
    const { supported } = await BarcodeScanner.isSupported();
    return supported;
  };

  openSettings = async () => {
    await BarcodeScanner.openSettings();
  };

  checkPermissions = async () => {
    const { camera } = await BarcodeScanner.checkPermissions();
    return camera;
  };

  requestPermissions = async () => {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera;
  };

  joinNumbers(array){
    return array.map(x => x.number).join(' , ')
  }


}
