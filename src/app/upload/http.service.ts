import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import {FileUploadModule} from 'primeng/fileupload';
//import {Message} from 'primeng/components/common/api'

@Injectable()

export class HttpService{

    constructor(private http: HttpClient){ }

    uploadedFiles: File = null;

    uploader(event, id) {
    console.log(id);
        const urlUploader = 'http://dev.user.api.lifeganizer.com/user-service';
        let uriUploader = null;

        if(id.name == 'action'){
        uriUploader = urlUploader + '/api/v1/admin/action/import';
        } else if(id.name == 'habit'){
        uriUploader = urlUploader + '/api/v1/admin/habit/import'
        } else if(id.name == 'program'){
        uriUploader = urlUploader + '/api/v1/admin/program/import';
        }

        this.uploadedFiles = <File>event.files[0];
        
        const fb = new FormData();
        fb.append('sampleFil', this.uploadedFiles, this.uploadedFiles.name);
        
        return this.http.post(uriUploader, fb); 
    }

    

    
}