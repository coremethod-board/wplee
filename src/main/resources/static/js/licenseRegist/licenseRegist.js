function nextStep(btnId,appendId) {
    $('#'+btnId).click(function (){
        let name = $('#writeName').val();
        let licenseNo = $('#writeLicenseNo').val();
        let licenseYear = $('#writeLicenseYear').val();

        // AJAX 요청 데이터 설정
        let requestData = {
            name: name,
            licenseNo: licenseNo,
            licenseYear: licenseYear
        };

        // AJAX POST 요청 보내기
        $.ajax({
            type: 'POST',
            url: '/regist/nextStepApi.cm', // 해당 엔드포인트 URL로 변경해주세요
            data: requestData,
            dataType: "html",
            success: function(response) {
                // 요청이 성공했을 때 수행할 동작
                console.log(response);
                document.querySelector('#'+appendId).innerHTML = response;
            },
            error: function(xhr, status, error) {
                // 요청이 실패했을 때 수행할 동작
                console.error('Error:', error);
            }
        });
    })
}