import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(thumbnailData: any, size: string = 'portrait_uncanny'): string {
    let url = 'http://www.piniswiss.com/wp-content/uploads/2013/05/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';
    if ( thumbnailData && thumbnailData.path) {
      url = `${thumbnailData.path}/${size}.${thumbnailData.extension}`;
    }
    return url;
  }

}
