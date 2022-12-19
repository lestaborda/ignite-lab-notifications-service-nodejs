import { CountRecipientNotifications } from './count-recipient-notifications';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'test-recipient-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'test-recipient-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'test-recipient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'test-recipient-1',
    });

    expect(count).toEqual(2);
  });
});
