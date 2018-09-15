import { ICountry } from "./ICountry";
import { Component, OnInit } from "@angular/core";
import { CountryService } from "./country.service";
import { ActivatedRoute } from "@angular/router";
import { IState } from "./IState";

@Component({
    selector: 'country-details',
    templateUrl: './country-details.component.html'
})
export class CountryDetailsComponent implements OnInit {
    private _code: string = "";
    public _country: ICountry;
    private _newState: string = "";

    constructor(private _route: ActivatedRoute,
                private _countryService: CountryService) {}

    ngOnInit(): void {
        this._route.params.subscribe(
            params => {
                this._code = params["code"];
                this.getCountry();
            }
        )
    }

    getCountry() {
        if (this._code) {
            this._countryService.getCountry(this._code)
                .subscribe((country: ICountry) => this._country = country);
        }
    }

    addState(): void {
        var newState: IState = { name: this._newState };
        this._country.states.push(newState);
        this._countryService.addState(this._newState, this._code)
            .subscribe((result: boolean) => this._newState = "");
    }
}