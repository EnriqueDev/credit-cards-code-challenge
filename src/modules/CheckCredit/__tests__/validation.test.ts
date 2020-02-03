import {
  validateName,
  validateIncome,
  validateOccupation,
  validateTitle,
  validateDate,
  validatePostCode,
} from '../validation'

// 3-2-2020
const NOW_DATE = 1580731906183

const validPostCodes = ['SW15 5PU', 'GL51 0EX', 'W1A 0AX', 'M1 1AE']

const invalidPostCodes = ['35007', '85001', 'a850333', 'SW 5Pu', 'M1 AE']

describe('Validation', () => {
  describe('Name', () => {
    it('should reject empty values', () => {
      const nameError = validateName('')

      expect(nameError).not.toBeNull()
    })

    it('should reject names shorter than 2 characters', () => {
      const nameError = validateName('a')

      expect(nameError).not.toBeNull()

      const shortNameValid = validateName('Vu')
      expect(shortNameValid).toBeNull()
    })
  })

  describe('Income', () => {
    it('should reject empty values', () => {
      const incomeError = validateIncome('')

      expect(incomeError).not.toBeNull()
    })

    it('should reject negative amounts', () => {
      const incomeError = validateIncome('-1000')
      expect(incomeError).not.toBeNull()
    })

    it('should reject non-number values', () => {
      const incomeError = validateIncome('error')
      expect(incomeError).not.toBeNull()
    })

    it('should accept positive numbers', () => {
      const incomeError = validateIncome('1000')
      expect(incomeError).toBeNull()
    })
  })

  describe('Occupation', () => {
    it('should reject empty values', () => {
      const nameError = validateOccupation('')

      expect(nameError).not.toBeNull()
    })
  })

  describe('Title', () => {
    it('should reject empty values', () => {
      const nameError = validateTitle('')

      expect(nameError).not.toBeNull()
    })
  })

  describe('Date', () => {
    it('should reject empty values', () => {
      const nameError = validateDate('')
      expect(nameError).not.toBeNull()
    })

    it('should reject dates less than 18 years appart', () => {
      const error = validateDate('04-02-2002', NOW_DATE)
      expect(error).not.toBeNull()
    })

    it('should reject dates more than 75 years appart', () => {
      const error = validateDate('02-02-1945', NOW_DATE)
      expect(error).not.toBeNull()
    })
    it('should accept dates between 18 and 75 years appart', () => {
      const error = validateDate('20-05-1993', NOW_DATE)
      expect(error).toBeNull()
    })
  })

  describe('PostCode', () => {
    it('should reject empty values', () => {
      const nameError = validatePostCode('')
      expect(nameError).not.toBeNull()
    })

    it('should accept valid postcodes', () => {
      validPostCodes.forEach(code => {
        expect(validatePostCode(code)).toBeNull()
      })
    })

    it('should reject in valid postcodes', () => {
      invalidPostCodes.forEach(code => {
        expect(validatePostCode(code)).not.toBeNull()
      })
    })
  })
})
