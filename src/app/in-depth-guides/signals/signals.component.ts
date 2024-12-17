import {Component, computed, effect, Signal, signal, WritableSignal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-signals',
  imports: [
    FormsModule
  ],
  standalone: true,
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public count: WritableSignal<number> = signal(6, {equal: (a) => a < 100}) // Якщо значення менше 100 то effect не викликається

  public computedCount: Signal<string> = computed(() => {
    if (this.count() > 10) {
      return `Current count is: ${this.count()}`
    }
    return "Count is too small"
  })
  constructor() {
    effect(() => {
      console.log(`Count value has changed to ${this.count()}`)
    });

    effect(() => console.log(this.computedCount())) // Ефект двічі підряд не спрацьовує якщо count() < 10, бо computedCount не міняється
  }
}
