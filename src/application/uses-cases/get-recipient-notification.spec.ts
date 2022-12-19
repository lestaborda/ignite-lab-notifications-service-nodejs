import { GetRecipientNotifications } from './get-recipient-notification';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';

describe('Get recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'test-recipient-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'test-recipient-1' }),
        expect.objectContaining({ recipientId: 'test-recipient-1' }),
      ]),
    );
  });
});
