"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const MenuElement_1 = require("./MenuElement");
const Input_1 = require("./Input");
class Menu {
    constructor() {
        this.mainMenu = [];
        this.soupMenu = [];
        this.chefSpecialMenu = [];
        this.chickenMenu = [];
        this.beefMenu = [];
        this.beveragesMenu = [];
        this.soupOptions = [];
        this.chefSpecialsOptions = [];
        this.chickenOptions = [];
        this.beefOptions = [];
        this.beveragesOptions = [];
        this.fillMainMenu();
        this.fillOptions();
        this.fillSubMenus();
    }
    fillMainMenu() {
        this.mainMenu = [
            { option: 1, message: 'Soup' },
            { option: 2, message: "Chef's Specials" },
            { option: 3, message: 'Chicken' },
            { option: 4, message: 'Beef' },
            { option: 5, message: 'Beverages' },
            { option: 6, message: 'Back' },
        ];
    }
    ;
    fillOptions() {
        this.soupOptions = [
            new MenuElement_1.MenuElement('Wonton Soup', 2.25, '🍜'),
            new MenuElement_1.MenuElement('Chicken Corn Soup', 1.95, '🥣'),
            new MenuElement_1.MenuElement('Vegetable Corn Soup', 2.25, '🌽'),
        ];
        this.chefSpecialsOptions = [
            new MenuElement_1.MenuElement('Orange Beef', 8.95, '🍊'),
            new MenuElement_1.MenuElement('Kung Pao Shrimp', 8.50, '🍤'),
        ];
        this.chickenOptions = [
            new MenuElement_1.MenuElement('Lemon Chicken', 9.95, '🍋'),
            new MenuElement_1.MenuElement('Sesame Chicken', 2.25, '🥫'),
            new MenuElement_1.MenuElement('Hunan Chicken', 10.50, '🍗'),
        ];
        this.beefOptions = [
            new MenuElement_1.MenuElement('PepperSteak', 9.95, '🥩'),
            new MenuElement_1.MenuElement('Manchurian Beef', 11.95, '🍖'),
        ];
        this.beveragesOptions = [
            new MenuElement_1.MenuElement('Piña Colada', 3.00, '🍹'),
            new MenuElement_1.MenuElement('Spanish Coffee', 2.25, '☕'),
        ];
    }
    ;
    fillSubMenus() {
        this.soupMenu = this.soupOptions.map((fill) => ({
            name: fill.id,
            message: fill.printOption(),
        }));
        this.chefSpecialMenu = this.chefSpecialsOptions.map((fill) => ({
            name: fill.id,
            message: fill.printOption(),
        }));
        this.chickenMenu = this.chickenOptions.map((fill) => ({
            name: fill.id,
            message: fill.printOption(),
        }));
        this.beefMenu = this.beefOptions.map((fill) => ({
            name: fill.id,
            message: fill.printOption(),
        }));
        this.beveragesMenu = this.beveragesOptions.map((fill) => ({
            name: fill.id,
            message: fill.printOption(),
        }));
    }
    ;
    showMainMenu() {
        return __awaiter(this, void 0, void 0, function* () {
            let option = -1;
            let input;
            while (option !== 6) {
                input = yield Input_1.Input.getSelect('Select a menu option', this.mainMenu);
                option = input.data;
                switch (option) {
                    case 1:
                        yield this.showSubMenuOption('Select your Soup', this.soupMenu, this.soupOptions);
                        break;
                    case 2:
                        yield this.showSubMenuOption(`Select your Chef's Specials`, this.chefSpecialMenu, this.chefSpecialsOptions);
                        break;
                    case 3:
                        yield this.showSubMenuOption('Select your Chicken', this.chickenMenu, this.chickenOptions);
                        break;
                    case 4:
                        yield this.showSubMenuOption('Select your Beef', this.beefMenu, this.beefOptions);
                        break;
                    case 5:
                        yield this.showSubMenuOption('Select your Beverage', this.beveragesMenu, this.beveragesOptions);
                        break;
                    case 6:
                        console.log(`\n
                =================================
                        
                        Enjoy your meal! 😋

                =================================\n`);
                        break;
                }
                ;
            }
            ;
        });
    }
    ;
    showSubMenuOption(message, subMenu, subMenuOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const input = yield Input_1.Input.getSelectById(message, subMenu);
            const option = subMenuOptions.find((fill) => input.data === fill.id);
            console.log(`\n
        ===================================================================================
                        
            Your order is: ${option === null || option === void 0 ? void 0 : option.emoji} at a $${option === null || option === void 0 ? void 0 : option.price} for the total cost. 

        ===================================================================================\n`);
        });
    }
    ;
}
exports.Menu = Menu;
;
