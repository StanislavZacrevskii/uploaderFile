import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

import {FileUploadModule} from 'primeng/fileupload';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  msgs: Message[];
  uploadeS: boolean = false;
  uploadeF: boolean = false;
  tr:boolean = false;
  method = [{
              "name":"action",
              "uploadeS": false,
              "uploadeF": false
            }, 
            {
              "name":"habit",
              "uploadeS": false,
              "uploadeF": false
            }];

constructor( private _data: HttpService ) { }

  uploaderF(event, id){
    this.clear();
    this._data.uploader(event, id).subscribe(
      data => {
        this.clear();
        this.uploadSuccess(data);
      },
      error => {
           this.clear();
           this.uploadError(error);
      }
    )
  }

  hasFile():boolean{
    if(name == 'action' && this._data.uploadedFiles != null){
      console.log(name);
      return this.tr = true;
      } else if(name == 'habit' && this._data.uploadedFiles != null){
        return this.tr = true;
      } else if(name == 'program' && this._data.uploadedFiles != null){
        return this.tr = true;
      }
    //return this._data.uploadedFiles != null;
  }

  uploadSuccess(data){
    this.uploadeS = true;
    this.msgs = [];
    this.msgs.push({severity: 'success', summary: 'Success', detail: 'File Uploaded'});
  }

  uploadError(error){
    this.uploadeF = true;
    let self = this.msgs = [];
    if(error.status == '0'){
      self.push({severity: 'info', summary: 'INFO', detail: 'Что-то пошло не так!!! Status 0'});
    }else {
      error.error.messages.forEach(function(item){
        if(item.type == "FATAL" || item.type == "ERROR"){
          self.push({severity: 'error', summary: item.type, detail: item.text});
        } else if(item.type == 'WARN'){
          self.push({severity: 'warn', summary: item.type, detail: item.text});
        } else{
          self.push({severity: 'info', summary: 'INFO', detail: 'Что-то пошло не так!!!'});
        }
      });
    }
  }

  clear() {
    this.uploadeS = false;
    this.uploadeF = false;
    return this._data.uploadedFiles = null;
}
  
  ngOnInit() {
  }

}
