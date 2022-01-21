import { Controller, Post, Res } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  // @Post('')
  // async Send(@Res() res) {
  //   return await this.mailService.send();
  // }
}
