"use client";

export type AutomationTrigger = {
  id: string;
  name: string;
  description: string;
  condition: (analysis: any) => boolean;
  action: (analysis: any) => any;
};

export class ADIPAutomationEngine {
  private triggers: AutomationTrigger[] = [];

  addTrigger(trigger: AutomationTrigger) {
    this.triggers.push(trigger);
  }

  getTriggers() {
    return this.triggers;
  }

  run(analysis: any) {
    const executed: any[] = [];

    for (const trigger of this.triggers) {
      if (trigger.condition(analysis)) {
        executed.push({
          id: trigger.id,
          name: trigger.name,
          description: trigger.description,
          result: trigger.action(analysis),
          timestamp: new Date().toLocaleString(),
        });
      }
    }

    return executed;
  }
}
