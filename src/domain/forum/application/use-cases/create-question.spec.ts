import { expect, describe, it, beforeEach } from 'vitest'
import { CreateQuestionUseCase } from './create-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-question-repository'

let inMemoryQuestionRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionRepository)
  })

  it('should be able to create a question', async () => {
    const { question } = await sut.execute({
      authorId: '123',
      content: 'Nova resposta',
      title: 'Dúvida',
    })

    expect(question.authorId).toBeTruthy()
    expect(inMemoryQuestionRepository.items[0].id).toEqual(question.id)
  })
})
