import {Component, computed, signal, WritableSignal} from '@angular/core';
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

  public showCount: WritableSignal<boolean> = signal(false);

  public count: WritableSignal<number> = signal(0)

  public conditionalCount = computed(() => {
    return this.count() * 2
  })
}
