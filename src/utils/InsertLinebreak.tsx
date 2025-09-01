
export const insertLineBreaksAfterWords = (text: string) => {
  return text.match(/\b\w+\b/g)?.join('\n') || '';
}

export const insertLineBreaksAfterSentence = (text: string) =>{
    return text.replace(/\. (?=[A-Z])/g, '.\n');
}