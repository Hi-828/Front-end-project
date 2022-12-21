import { InternalTagType } from '@tags/Base/BaseTag/BaseTagController';
import { BaseVisualTagController } from '@tags/Base/BaseVisualTag/BaseVisualTagController';
import { HeaderTagView } from './HeaderTagView';

export class HeaderTagController extends BaseVisualTagController {
  static type: InternalTagType = 'header';

  private view = HeaderTagView;

  render() {
    return this.view;
  }
}
