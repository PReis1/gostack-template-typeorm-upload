import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  // eslint-disable-next-line no-shadow
  public async execute(id: string): Promise<void> {
    // TODO

    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError("Transaction can't be found");
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
