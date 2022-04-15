import { prompt } from 'enquirer';
export type UserInput = { data: string };
export type UserFormInput = { data: any };
export type UserOption = { data: number };
export type UserOptionById = UserInput;
export type UserConfirm = { data: boolean };
export type Choice = { name: string; message: string };
export type SelectChoice = { option: number; message: string };
type Choices = Choice[] | string[];
type UserOptionAux = { data: string };
type SelectChoices = SelectChoice[];

export class Input {
  static async getInput(message: string): Promise<UserInput> {
    const input: UserInput = await prompt({
      type: 'input',
      name: 'data',
      message: message,
    });
    return input;
  }

  static async getForm(
    message: string,
    choices: Choices
  ): Promise<UserFormInput> {
    const input: UserFormInput = await prompt({
      type: 'form',
      name: 'data',
      message: message,
      choices: choices,
    });
    return input;
  }

  static async getSelect(
    message: string,
    choices: SelectChoices
  ): Promise<UserOption> {
    const input: UserOptionAux = await prompt({
      type: 'select',
      name: 'data',
      message: message,
      choices: choices.map((choice: SelectChoice) => ({
        name: choice.option.toString(),
        message: choice.message,
      })),
    });
    return { data: Number(input.data) };
  }

  static async getSelectById(
    message: string,
    choices: Choice[]
  ): Promise<UserOptionById> {
    const input: UserOptionById = await prompt({
      type: 'select',
      name: 'data',
      message: message,
      choices: choices,
    });
    return input;
  }

  static async getConfirm(message: string): Promise<UserConfirm> {
    const input: UserConfirm = await prompt({
      type: 'confirm',
      name: 'data',
      initial: false,
      message: message,
    });
    return { data: input.data };
  }
}