import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SendNotification } from '@application/uses-cases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@application/uses-cases/cancel-notification';
import { ReadNotification } from '@application/uses-cases/read-notification';
import { UnreadNotification } from '@application/uses-cases/unread-notification';
import { CountRecipientNotifications } from '@application/uses-cases/count-recipient-notifications';
import { GetRecipientNotifications } from '@application/uses-cases/get-recipient-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
  ],
})
export class HttpModule {}
