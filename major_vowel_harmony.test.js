import isHasMajorVowelHarmony from './major_vowel_harmony';

it('runs correctly', () => {
  expect(isHasMajorVowelHarmony('adım')).toBe(true);
  expect(isHasMajorVowelHarmony('ayak')).toBe(true);
  expect(isHasMajorVowelHarmony('boyunduruk')).toBe(true);
  expect(isHasMajorVowelHarmony('burun')).toBe(true);
  expect(isHasMajorVowelHarmony('dalga')).toBe(true);
  expect(isHasMajorVowelHarmony('dudak')).toBe(true);
  expect(isHasMajorVowelHarmony('kırlangıç')).toBe(true);
  expect(isHasMajorVowelHarmony('beşik')).toBe(true);
  expect(isHasMajorVowelHarmony('bilezik')).toBe(true);
  expect(isHasMajorVowelHarmony('gelincik')).toBe(true);
  expect(isHasMajorVowelHarmony('gözlük')).toBe(true);
  expect(isHasMajorVowelHarmony('üzengi')).toBe(true);
  expect(isHasMajorVowelHarmony('vergi')).toBe(true);
  expect(isHasMajorVowelHarmony('yüzük')).toBe(true);

  expect(isHasMajorVowelHarmony('elma')).toBe(false);
  expect(isHasMajorVowelHarmony('şişman')).toBe(false);
  expect(isHasMajorVowelHarmony('anne')).toBe(false);
  expect(isHasMajorVowelHarmony('kardeş')).toBe(false);
  expect(isHasMajorVowelHarmony('kalem')).toBe(false);
  expect(isHasMajorVowelHarmony('mavi')).toBe(false);
  expect(isHasMajorVowelHarmony('kitap')).toBe(false);
  expect(isHasMajorVowelHarmony('edebiyat')).toBe(false);
  expect(isHasMajorVowelHarmony('düşman')).toBe(false);
  expect(isHasMajorVowelHarmony('televizyon')).toBe(false);
  expect(isHasMajorVowelHarmony('dakika')).toBe(false);
  expect(isHasMajorVowelHarmony('saniye')).toBe(false);
  expect(isHasMajorVowelHarmony('ilkbahar')).toBe(false);
});
