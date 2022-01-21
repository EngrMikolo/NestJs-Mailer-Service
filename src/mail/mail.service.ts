import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailRequestDto } from './dto/mailrequest';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async send(request: MailRequestDto) {
    const { to, subject, body } = request;
    console.log('about to send');
    const result = await this.mailerService.sendMail({
      to: to,
      from: 'CerviTech', // override default from
      subject: subject,
      text: body,
    });
    console.log('sent');
    console.log(result);
  }
}
