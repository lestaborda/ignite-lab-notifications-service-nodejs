export class Content {
  private readonly content: string;

  private validateContentLenght(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  get value(): string {
    return this.content;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLenght(content);

    if (!isContentLengthValid) {
      throw new Error('Invalid content length');
    }

    this.content = content;
  }
}
