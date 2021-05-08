import { ActionCreatorProps, props } from '@ngrx/store';
import { IActionForcePayload } from '@int-srv/shared/utils/interfaces';

export function payloadForce<
  P extends Record<string, unknown>
>(): ActionCreatorProps<{
  payload: P & IActionForcePayload;
}> {
  return props<{ payload: P & IActionForcePayload }>();
}
