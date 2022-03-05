let presentLiter = 0;

    document.addEventListener('DOMContentLoaded', function () {
        let btnSettingAmountWater = document.querySelector('#btn-setting-amount-water');
        btnSettingAmountWater.addEventListener('click', onclickWaterAmountSetting);

        let addCups = document.querySelector('#add-cups');
        addCups.addEventListener('click', onclickAddCups);
    });

    function onclickWaterAmountSetting() {
        let divPrevSetting = document.querySelector('#div-prev-setting');
        let divDrinkWater = document.querySelector('#div-drink-water');

        divPrevSetting.style.cssText = 'display: none';

        let targetLiter = document.querySelector('#target-liter');
        let bottleLiter = document.querySelector('#bottle-liter');

        let present = document.querySelector('#present');
        let target = document.querySelector('#target');
        let percentage = document.querySelector('#percentage');
        let remainingCup = document.querySelector('#remaining-cup');

        present.textContent = '현재 : 0 (mL)';
        target.textContent = '목표 : ' + targetLiter.value + '(L)';
        percentage.textContent = '달성률 : 0 %';

        let remainingCupCount;

        let intBottleMilliliter = parseInt(bottleLiter.value) ;
        let intTargetLiter = parseInt(targetLiter.value) * 1000;

        if (intBottleMilliliter >= intTargetLiter) {
            remainingCupCount = 1;
        } else {
            remainingCupCount = Math.round((intTargetLiter / intBottleMilliliter) * 10) / 10;
        }

        remainingCup.textContent = '앞으로 : ' + remainingCupCount + '컵';

    }

            function onclickAddCups() {
        presentLiter = parseInt(presentLiter) + parseInt(document.querySelector('#bottle-liter').value);

        let targetLiter = document.querySelector('#target-liter');
        let bottleLiter = document.querySelector('#bottle-liter');

        let present = document.querySelector('#present');
        let percentage = document.querySelector('#percentage');
        let remainingCup = document.querySelector('#remaining-cup');

        let intTargetLiter = parseInt(targetLiter.value) * 1000;
        let intBottleLiter = parseInt(bottleLiter.value);

        present.textContent = '현재 : ' + presentLiter + ' (ml)';
        percentage.textContent = '달성률 : ' + Math.round(((presentLiter / intTargetLiter) * 100) * 10) / 10 + ' %';

        let remainingCupCount;

        let remainingLiter = intTargetLiter - presentLiter;

        remainingCupCount = Math.round(((intTargetLiter - presentLiter) / intBottleLiter) * 100) / 100;
        if (remainingCupCount < 0) {
            remainingCupCount = 0;
        }
        

        remainingCup.textContent = '앞으로 : ' + remainingCupCount + '컵';
    }