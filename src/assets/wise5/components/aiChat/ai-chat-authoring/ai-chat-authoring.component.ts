import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatTooltip } from '@angular/material/tooltip';
import { EditComponentPrompt } from '../../../../../app/authoring-tool/edit-component-prompt/edit-component-prompt.component';
import { AbstractComponentAuthoring } from '../../../authoringTool/components/AbstractComponentAuthoring';
import { EditDialogGuidanceComputerAvatarComponent } from '../../dialogGuidance/edit-dialog-guidance-computer-avatar/edit-dialog-guidance-computer-avatar.component';
import { MatCard } from '@angular/material/card';
import { AiChatFeedbackRule } from '../AiChatContent';

@Component({
  templateUrl: './ai-chat-authoring.component.html',
  styleUrl: './ai-chat-authoring.component.scss',
  imports: [
    MatButtonModule,
    MatTooltip,
    MatIcon,
    MatFormFieldModule,
    MatInput,
    CdkTextareaAutosize,
    FormsModule,
    EditComponentPrompt,
    MatCheckbox,
    EditDialogGuidanceComputerAvatarComponent,
    MatCard
  ]
})
export class AiChatAuthoringComponent extends AbstractComponentAuthoring {
  protected showSystemPromptHelp = false;

  ngOnInit(): void {
    super.ngOnInit();
    if (this.componentContent.feedbackRules == null) {
      this.componentContent.feedbackRules = [];
    }
  }

  addFeedbackRule(): void {
    const rule: AiChatFeedbackRule = { detectedIdea: '', responseGuidance: '' };
    this.componentContent.feedbackRules.push(rule);
    this.componentChanged();
  }

  deleteFeedbackRule(index: number): void {
    this.confirmAndRemove(
      $localize`Are you sure you want to delete this feedback rule?`,
      this.componentContent.feedbackRules,
      index
    );
  }
}
