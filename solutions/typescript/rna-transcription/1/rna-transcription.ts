type DNARNAMAP = { [key: string]: string }

const DNA_TO_RNA: DNARNAMAP = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}

function dnaRnaMapper(nucleotide: string): string {
  const complement = DNA_TO_RNA[nucleotide]
  if (!complement) {
    throw new Error('Invalid input DNA.')
  }
  return complement
}

export function toRna(nucleotides: string): string {
  return nucleotides.split('').map(dnaRnaMapper).join('')
}
