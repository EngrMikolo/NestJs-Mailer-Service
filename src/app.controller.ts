import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { MailRequestDto } from './mail/dto/mailrequest';
import { MailService } from './mail/mail.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly mailService: MailService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/send')
  async Send(@Res() res, @Body() mailRequestDto: MailRequestDto) {
    const result = await this.mailService.send(mailRequestDto);
    return result;
  }
}
