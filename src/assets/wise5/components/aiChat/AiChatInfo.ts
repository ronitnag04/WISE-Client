import { ComponentInfo } from '../ComponentInfo';

export class AiChatInfo extends ComponentInfo {
  protected description: string = $localize`Students chat with an AI bot.`;
  protected label: string = $localize`AI Chat`;
  protected previewExamples: any[] = [
    {
      label: $localize`AI Chat`,
      content: {
        id: 'abcde12345',
        type: 'AiChat',
        prompt:
          "Let's think about how global warming happens. At the end of the project you will revise your answer to this question. On a cold winter day, Akbar is walking to his car that is parked in the sun. His car has not been driven for one week. How will the temperature inside the car feel? Hint: Akbar wonders if what happens in his car is similar to the greenhouse effect.",
        model: 'gpt-4',
        systemPrompt:
          'You are a teacher helping a student understand the greenhouse effect by using the example of a car that has been sitting in the sun on a cold day. The student is asked how the temperature inside the car will feel. Do not tell them the correct answer, but guide them to better understand the science by asking questions. Limit your response to 100 words / 1-2 sentences, and make sure not to ask more than 1 question at a time. Avoid overwhelming students with too much information at once; instead, guide them with a natural, step-by-step dialogue. Use a kind and encouraging tone, like how a teacher would speak to a student.',
        intendedAnswer:
          'The air inside the car will feel warmer than the outside air because sunlight passes through the windows, the interior absorbs energy and heats up, and the glass traps some of that heat. This process is similar in spirit to the greenhouse effect.',
        isComputerAvatarEnabled: true,
        computerAvatarSettings: {
          ids: [
            'person1',
            'person2',
            'person3',
            'person4',
            'person5',
            'person6',
            'person7',
            'person8',
            'robot1',
            'robot2'
          ],
          label: 'Thought Buddy',
          prompt: 'Discuss your answer with a thought buddy!',
          initialResponse: 'Can you explain what happens to the temperature inside the car?'
        }
      }
    }
  ];
}
