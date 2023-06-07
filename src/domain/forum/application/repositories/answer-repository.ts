import { PaginationParams } from '@/core/repositories/pagination-params'
import { Answer } from '../../enterprise/entities/answer'

export interface AnswersRepository {
  create(answer: Answer): Promise<void>
  findById(id: string): Promise<Answer | null>
  save(answer: Answer): Promise<void>
  findManyByQuestionId(
    question: string,
    params: PaginationParams,
  ): Promise<Answer[]>
  delete(question: Answer): Promise<void>
}
