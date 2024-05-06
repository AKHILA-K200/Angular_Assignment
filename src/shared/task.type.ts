import { FormControl } from "@angular/forms";
export type ObjectValues<T> = T[keyof T];

export namespace taskManagement{
   export interface taskCreate{
        "id":string;
        "title":string;
        "description"?:string;
        "status":boolean;
    }
    export interface taskCreateForm {
        id: FormControl<string | null>;
        title: FormControl<string | null>;
        description?: FormControl<string | null>;
        status: FormControl<boolean | null>;

    }
    export const toastTitle = {
        SUCCESS: 'SUCCESS',
        WARNING: 'WARNING',
        ERROR: 'ERROR',
        INFO: 'INFO',
      } as const;
      
      export type TToastTitle = ObjectValues<typeof toastTitle>;
}