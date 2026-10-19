"use client";

export type DNIPRule = {
  id: string;
  name: string;
  description: string;
  condition: (analysis: any) => boolean;
  effect: (analysis: any) => any;
};

export class DNIPRulesEngine {
  private rules: DNIPRule[] = [];

  addRule(rule: DNIPRule) {
    this.rules.push(rule);
  }

  getRules() {
    return this.rules;
  }

  evaluate(analysis: any) {
    const triggered: any[] = [];

    for (const rule of this.rules) {
      if (rule.condition(analysis)) {
        triggered.push({
          id: rule.id,
          name: rule.name,
          description: rule.description,
          result: rule.effect(analysis),
        });
      }
    }

    return triggered;
  }
}
