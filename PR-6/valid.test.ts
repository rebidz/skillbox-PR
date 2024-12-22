import { validateDate } from './src/validate/validateDate';
import { errors } from './src/utils/dictionarty';
import { validateCityName } from './src/validate/validateCity';

describe('Функция validateDate', () => {
  it('Валидация даты пропускает дату в виде ДД.ММ.ГГГГ.', () => {
    const validDate = '10.02.2025';
    const result = validateDate(validDate);
    expect(result).toEqual({
      isValid: true,
      message: errors.date.valid,
    });
  });

  it('Валидация даты не пропускает спецсимволы.', () => {
    const invalidDate = '10.^02.2025';
    const result = validateDate(invalidDate);
    expect(result).toEqual({
      isValid: false,
      message: errors.date.invalidCharacters,
    });
  });

  it('Валидация даты не пропускает буквенные значения.', () => {
    const invalidDate = '10.0F.2025';
    const result = validateDate(invalidDate);
    expect(result).toEqual({
      isValid: false,
      message: errors.date.invalidCharacters,
    });
  });

  it('Валидация даты выдаёт предупреждение, если дата раньше текущей.', () => {
    const pastDate = '20.11.2022';
    const result = validateDate(pastDate);
    expect(result).toEqual({
      isValid: false,
      message: errors.date.past,
    });
  });
});

describe('validate', () => {
  const escapeCharsPattern = ['<', '>', '&'];

  it('Валидация города выдаёт предупреждение, если есть экранирование (<, >, &, ")', () => {
    escapeCharsPattern.forEach((char) => {
      const cityName = `City${char}Name${char}`;
      const result = validateCityName(cityName);
      expect(result).toEqual({
        isValid: false,
        message: errors.city.escape,
      });
    });
  });

  it('Валидация города пропускает название с восклицательным знаком или дефисами ', () => {
    const cityName = 'Ciudad-Juárez!';
    const result = validateCityName(cityName);
    expect(result).toEqual({
      isValid: true,
      message: errors.city.valid,
    });
  });

  it('Валидация города пропускает название со спецсимволами', () => {
    const cityName = 'München';
    const result = validateCityName(cityName);
    expect(result).toEqual({
      isValid: true,
      message: errors.city.valid,
    });
  });

  it('Валидация города пропускает название из одной буквы', () => {
    const cityName = 'M';
    const result = validateCityName(cityName);
    expect(result).toEqual({
      isValid: true,
      message: errors.city.valid,
    });
  });
});
