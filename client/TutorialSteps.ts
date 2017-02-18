module ImprovedInitiative {
    interface Position {
        left: number;
        top: number;
    }
    
    export interface TutorialStep {
        Message: string;
        RaiseSelector: string;
        CalculatePosition: (element: JQuery) => Position;
    }
    export const TutorialSteps: TutorialStep[] = [
        {
            Message: "Let's start by adding a few creatures to the encounter. <strong>Click on any creature</strong> to load its stat block.",
            RaiseSelector: ".left-column",
            CalculatePosition: elements => {
                const left = elements.offset().left + elements.outerWidth() + 10;
                const top = elements.offset().top + 200;
                return { left, top };
            }
        },
        {
            Message: "When you're ready to add some adventurers, select the <strong>Players</strong> tab at the top of the library.",
            RaiseSelector: ".libraries .tabs span",
            CalculatePosition: elements => {
                const element = elements.last();
                const left = element.offset().left + element.outerWidth() + 10;
                const top = element.offset().top + 5;
                return { left, top };
            }
        },
        {
            Message: "It's easy to add your own player characters to Improved Initiative. For now, <strong>add a few sample characters</strong>.",
            RaiseSelector: ".left-column",
            CalculatePosition: elements => {
                const left = elements.offset().left + elements.outerWidth() + 10;
                const top = elements.offset().top + 200;
                return { left, top };
            }
        },
        {
            Message: "Press 'alt-r' or <strong>click 'Start Encounter'</strong> to roll initiative.",
            RaiseSelector: ".button.fa-play",
            CalculatePosition: elements => {
                const element = elements.last();
                const left = element.offset().left + element.outerWidth() + 10;
                const top = element.offset().top + 5;
                return { left, top };
            }
        },
        {
            Message: "Enter initiative rolls, or <strong>press enter</strong> to take the pre-rolled results.",
            RaiseSelector: ".prompt",
            CalculatePosition: elements => {
                const element = elements.add('.combat-footer').first();
                const left = element.offset().left;
                const top = element.offset().top - ($('.tutorial').outerHeight() + 10);
                return { left, top };
            }
        },
        //{ Apply damage },
        //{ Advance turn },
        {
            Message: "Click 'Settings' to set keyboard shortcuts and see advanced features, or choose <strong>End Tutorial</strong>.",
            RaiseSelector: ".button.fa-gear",
            CalculatePosition: elements => {
                const element = elements.last();
                const left = element.offset().left + element.outerWidth() + 10;
                const top = element.offset().top + 5;
                return { left, top };
            }
        },

    ];
}