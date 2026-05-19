var countGroupSkill = 0;

function resetModal() {
    let modalStep = $('[data-modal-step="modal-step"]');
    let currentStep = modalStep.data('step');
    let newStep = 1;
    modalStep.removeClass('modal-step' + currentStep);
    modalStep.addClass('modal-step' + (newStep));
    modalStep.removeClass('type-themmoi_cv');
    modalStep.removeClass('type-chontukho');
    modalStep.data('step', newStep);
    $("#form_save_cv").find('select').val('').trigger('change');
    $("#form_save_cv").find('[name="candidate_currency"]').val('VND').trigger('change');
}

function resetSkill() {
    let itemGroupSkill = $('.group-skill .item-group-skill');
    itemGroupSkill.each(function (i, v) {
        if (i > 0) {
            $(v).remove();
        } else {
            $(v).find('select').val('').change();
            $(v).find('input').val('');
        }
    })
    countGroupSkill = 0;
}

$(document).ready(function () {
    // $("#modal-introduction-v2").modal('show');

    if ($("#modal-introduction-success").length > 0) {
        $("#modal-introduction-success").modal('show');
    }
    $("#ware_house_cv_v2").select2({
        dropdownParent: "#modal-introduction-v2",
        ajax: {
            url: $("#ware_house_cv_filter").val(),
            type: "get",
            dataType: 'json',
            delay: 550,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: function (params) {
                return {
                    searchTerm: params.term,
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        },
        templateResult: function (response) {
            let content = '';
            if (response.disabled === true) {
                content = response.text;
            } else {
                content = '<div class="item-dropdow-ware_house_cv_v2">' +
                    '<div class="line1"><b>' + response.candidate_name + '</b> - ' + response.candidate_job_title + '</div>' +
                    '<div class="line2">' +
                    '<span class="dropdown-phone">' + response.candidate_mobile + '</span>' +
                    '<span class="dropdown-email">' + response.candidate_email + '</span>' +
                    '</div>' +
                    '</div>';
            }


            return $(content);
        },
    });

    $("#job_chontukho_v2").select2({
        dropdownParent: "#modal-introduction-v2",
        ajax: {
            url: $("#job_chontukho_v2_filter").val(),
            type: "get",
            dataType: 'json',
            delay: 550,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: function (params) {
                return {
                    searchTerm: params.term // search term
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }
    });


    $("#job_chontukho_v2").change(function () {
        $('.action-group-checkbox').hide();
        $('#mess-authority-onboard').hide();
        $('#mess-authority-interview').hide();
        $('[name="authority"]').prop("checked", false);
        $.ajax({
            url: $("#get_detail_job").val(),
            type: "get",
            dataType: 'json',
            data: {
                'id': $(this).val()
            },
            success: function (res) {
                $('#job_bonus').val(res.bonus);
                $('#job_bonus_self_apply').val(res.bonus_self_apply);
                if (res.bonus_type === 'onboard') {
                    $('.action-group-checkbox').show();
                    $('#mess-authority-onboard').show();
                }
                if (res.bonus_type === 'interview') {
                    $('.action-group-checkbox').show();
                    $('#mess-authority-interview').show();
                }
                jobData = res;
            }
        })
    })

    function renderSelectSkill() {
        $(".select-skill").select2({
            dropdownParent: "#modal-introduction-v2",
            ajax: {
                url: $("#skills_filter").val(),
                type: "get",
                dataType: 'json',
                delay: 550,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data: function (params) {
                    return {
                        search: params.term,
                        type: 'public'
                    };
                },
                processResults: function (response) {
                    return {
                        results: response
                    };
                },
                cache: true
            }
        });
    }

    renderSelectSkill();

    $('[data-toggle="add-skill"]').click(function () {
        let inputHtml = $("#clone-group-skill").html();
        countGroupSkill = countGroupSkill + 1;
        inputHtml = inputHtml.replaceAll("number_skill", countGroupSkill)
        inputHtml = inputHtml.replaceAll("select-skill-clone", 'select-skill')
        $('.input-group-skill').append(inputHtml);
        renderSelectSkill();
    })

    $('body').on('click', '[data-toggle="remove-skill"]', function () {
        $(this).parents('.item-group-skill').remove();
    })

    $('[data-toggle="action-group-toggle"]').click(function () {
        let groupToggle = $(this).parents('.group-toggle');
        if (groupToggle.hasClass('active')) {
            groupToggle.removeClass('active');
        } else {
            groupToggle.addClass('active');
        }
    });

    $('[data-toggle="checkbox-tab"]').change(function () {
        $('[data-toggle="next-step"]').click();
    })

    $('[data-toggle="next-step"]').click(function () {
        let modalStep = $('[data-modal-step="modal-step"]');
        let currentStep = modalStep.data('step');
        let newStep = parseInt(currentStep) + 1;
        if (currentStep === 1 && newStep === 2) {
            let val = validateStep1To2();
            if (val === true) {
                step1To2();
            }
        }

        if (currentStep === 2 && newStep === 3) {
            let val = validateStep2To3();
            if (val === true) {
                step2To3();
            }
        }


        if (currentStep === 3 && newStep === 4) {
            let val = validateStep3To4();
            if (val === true) {
                step3To4();
            }
        }
    });

    $('[data-toggle="back-step"]').click(function () {
        let modalStep = $('[data-modal-step="modal-step"]');
        let currentStep = modalStep.data('step');
        let newStep = parseInt(currentStep) - 1;

        if (newStep === 1 && currentStep === 2) {
            step2To1();
        }


        if (newStep === 2 && currentStep === 3) {
            step3To2();
        }
    });


    function validateStep1To2() {
        let val = $('[data-toggle="checkbox-tab"]:checked').val();
        if (val === 'chontukho' || val === 'themmoi_cv') {
            $('.tab-error').hide();
            return true;
        } else {
            $('.tab-error').show();
            return false;
        }
    }

    function validateStep2To3() {
        let inputWareHouseCv = $("#ware_house_cv_v2");
        let val = inputWareHouseCv.val();
        let validate = true;
        $('.ware_house_cv-error').hide();
        if (val <= 0) {
            $('.ware_house_cv-error').html(inputWareHouseCv.data('mess-required')).show();
            validate = false;
            return validate;
        }
        if (val > 0) {
            $.ajax({
                url: inputWareHouseCv.data('url-validate-cv'),
                type: 'POST',
                async: false,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data:
                {
                    cv: val,
                    job_id: $('#job-detail-apply').val(),
                },
                success: function (data) {
                    if (data.success == true) {
                        validate = false;
                        $('.ware_house_cv-error').html(data.message).show();
                    }
                }
            });
        }
        return validate;
    }

    function validateStep3To4() {
        let mainForm = $('[data-toggle="main-form"]');
        let candidateName = mainForm.find('[name="candidate_name"]');
        let candidateMobile = mainForm.find('[name="candidate_mobile"]');
        let candidateEmail = mainForm.find('[name="candidate_email"]');
        let candidateJobTitle = mainForm.find('[name="candidate_job_title"]');
        let candidatePortfolio = mainForm.find('[name="candidate_portfolio"]');
        let candidateSalaryExpect = mainForm.find('[name="candidate_salary_expect"]');
        let candidateSalaryExpectTo = mainForm.find('[name="candidate_salary_expect_to"]');
        let assessment = mainForm.find('[name="assessment"]');
        let yearExperience = mainForm.find('[name="year_experience"]');
        let rank = mainForm.find('[name="rank"]');
        let career = mainForm.find('[name="career[]"]');
        let skills = mainForm.find('.select-skill');

        let expectedDate = mainForm.find('[name="candidate_est_timetowork"]');
        let isSelfApply = mainForm.find('[name="is_self_apply"]');
        let job = mainForm.find('[name="job"]');

        mainForm.find('.error').html('').hide();
        let validateGroup1 = true;
        let validateGroup2 = true;
        let validate = true;

        if (candidateName.val() === '') {
            validate = false;
            validateGroup1 = false;
            $('.candidate_name-error').html(candidateName.data('mess-required')).show();
        }

        if (candidateSalaryExpect.val() === '') {
            validate = false;
            validateGroup1 = false;
            $('.candidate_salary_expect-error').html(candidateSalaryExpect.data('mess-required')).show();
        }

        if (candidateSalaryExpectTo.val() === '') {
            validate = false;
            validateGroup1 = false;
            $('.candidate_salary_expect-error').html(candidateSalaryExpectTo.data('mess-required')).show();
        }

        const regexPhone = /^[0-9()+.-]*$/;
        if (candidateMobile.val() === '') {
            validate = false;
            validateGroup1 = false;
            $('.candidate_mobile-error').html(candidateMobile.data('mess-required')).show();
        } else if (candidateMobile.val().length < 10) {
            validate = false;
            validateGroup1 = false;
            $('.candidate_mobile-error').html(candidateMobile.data('mess-minlength')).show();
        } else if (candidateMobile.val().length > 16) {
            validate = false;
            validateGroup1 = false;
            $('.candidate_mobile-error').html(candidateMobile.data('mess-maxlength')).show();
        } else if (!candidateMobile.val().trim().match(regexPhone)) {
            validate = false;
            validateGroup1 = false;
            $('.candidate_mobile-error').html(candidateMobile.data('mess-regex')).show();
        }

        const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (candidateEmail.val() === '') {
            validate = false;
            validateGroup1 = false;
            $('.candidate_email-error').html(candidateEmail.data('mess-required')).show();
        } else if (!candidateEmail.val().trim().match(regexEmail)) {
            validate = false;
            validateGroup1 = false;
            $('.candidate_email-error').html(candidateEmail.data('mess-email')).show();
        }

        if (candidateJobTitle.val() === '') {
            validate = false;
            validateGroup1 = false;
            $('.candidate_job_title-error').html(candidateJobTitle.data('mess-required')).show();
        }

        // if (candidatePortfolio.val() === ''){
        //     validate = false;
        //     validateGroup1 = false;
        //     $('.candidate_portfolio-error').html(candidatePortfolio.data('mess-required')).show();
        // }

        if (career.val().length === 0) {
            validate = false;
            validateGroup1 = false;
            $('.career-error').html(career.data('mess-required')).show();
        }


        const regexNumber = /^-?(?:\d+|\d{1,3}(?:[\s\.,]\d{3})+)(?:[\.,]\d+)?$/;
        if (candidateSalaryExpect.val() !== '' && !candidateSalaryExpect.val().trim().match(regexNumber)) {
            validate = false;
            validateGroup1 = false;
            $('.candidate_salary_expect-error').html(candidateSalaryExpect.data('mess-number')).show();
        } else if (candidateSalaryExpectTo.val() !== '' && !candidateSalaryExpectTo.val().trim().match(regexNumber)) {
            validate = false;
            validateGroup1 = false;
            $('.candidate_salary_expect-error').html(candidateSalaryExpectTo.data('mess-number')).show();
        }

        if (parseInt(candidateSalaryExpectTo.val()) <= parseInt(candidateSalaryExpect.val())) {
            validate = false;
            validateGroup1 = false;
            $('.candidate_salary_expect-error').html(candidateSalaryExpect.data('mess-compare')).show();
        }

        if (assessment.val() === '') {
            validate = false;
            validateGroup1 = false;
            $('.assessment-error').html(assessment.data('mess-required')).show();
        }

        if (yearExperience.val() === '') {
            validate = false;
            validateGroup1 = false;
            $('.year_experience-error').html(yearExperience.data('mess-required')).show();
        }

        if (rank.val() === '') {
            validate = false;
            validateGroup1 = false;
            $('.rank-error').html(rank.data('mess-required')).show();
        }
        if ($(skills[0]).val() == null) {
            validate = false;
            validateGroup1 = false;
            $('.skills-error').html($(skills[0]).data('mess-required')).show();
        }

        if (candidateEmail.val() && candidateMobile.val()) {
            $.ajax({
                url: candidateEmail.data('url-validate-duplicate'),
                type: 'POST',
                async: false,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data:
                {
                    email: candidateEmail.val(),
                    phone: candidateMobile.val(),
                    job_id: job.val(),
                },
                success: function (data) {
                    if (data.success == true) {
                        validate = false;
                        validateGroup1 = false;
                        $('.candidate_email-error').html(data.message).show();
                    }
                }
            });
        }


        if (!validateGroup1) {
            $('[data-toggle="group1"]').addClass('active')
        }

        if (expectedDate.val() === '') {
            validate = false;
            validateGroup2 = false;
            $('.expected_date-error').html(expectedDate.data('mess-required')).show();
        }
        if (isSelfApply.val() === '' || isSelfApply.val() === null) {
            validate = false;
            validateGroup2 = false;
            $('.is_self_apply-error').html(isSelfApply.data('mess-required')).show();
        }
        if (job.val() === '' || job.val() === null) {
            validate = false;
            validateGroup2 = false;
            $('.job-error').html(job.data('mess-required')).show();
        }
        if (!validateGroup2) {
            $('[data-toggle="group2"]').addClass('active')
        }
        // Find first visible error and scroll to it
        let firstError = $('.col-main .modal-body .error').filter(function () {
            return $(this).css('display') !== 'none';
        }).first();

        if (firstError.length) {
            $('.col-main .modal-body').animate({
                scrollTop: firstError.offset().top - $('.col-main .modal-body').offset().top + $('.col-main .modal-body').scrollTop() - 100
            }, 500);
        }

        return validate;
    }


    function step1To2() {
        let modalStep = $('[data-modal-step="modal-step"]');
        let currentStep = modalStep.data('step');
        let newStep = parseInt(currentStep) + 1;
        modalStep.removeClass('modal-step' + currentStep);
        modalStep.addClass('modal-step' + (newStep));
        modalStep.data('step', newStep);

        let val = $('[data-toggle="checkbox-tab"]:checked').val();
        modalStep.addClass('type-' + val);
    }

    function step2To1() {
        let modalStep = $('[data-modal-step="modal-step"]');
        let currentStep = modalStep.data('step');
        let newStep = parseInt(currentStep) - 1;
        modalStep.removeClass('modal-step' + currentStep);
        modalStep.addClass('modal-step' + (newStep));
        modalStep.data('step', newStep);

        let val = $('[data-toggle="checkbox-tab"]:checked').val();
        modalStep.removeClass('type-' + val);
    }

    function step3To2() {
        let modalStep = $('[data-modal-step="modal-step"]');
        let currentStep = modalStep.data('step');
        let newStep = parseInt(currentStep) - 1;
        modalStep.removeClass('modal-step' + currentStep);
        modalStep.addClass('modal-step' + (newStep));
        modalStep.data('step', newStep);
    }

    function step2To3() {
        $(".wapper-iframe iframe").attr('src', '');
        $.ajax({
            url: $("#detail_csv_by_id").val(),
            type: "post",
            dataType: 'json',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: {
                'id': $("#ware_house_cv_v2").val()
            },
            success: function (res) {
                if (res.url_cv_private.includes('.pdf')) {
                    $(".wapper-iframe iframe").attr('src', res.url_cv_private);
                } else {
                    $(".wapper-iframe iframe").attr('src', "https://view.officeapps.live.com/op/embed.aspx?src=" + encodeURIComponent(res.url_cv_private));
                }
                // $(".wapper-iframe iframe").attr('src', 'https://docs.google.com/gview?embedded=true&url=' + res.url_cv_private);
                let mainForm = $('[data-toggle="main-form"]');

                mainForm.find('.error').html('').hide();
                mainForm.find('[name="candidate_name"]').attr('readonly', true).val(res.candidate_name);
                mainForm.find('[name="candidate_mobile"]').attr('readonly', true).val(res.candidate_mobile);
                mainForm.find('[name="candidate_email"]').attr('readonly', true).val(res.candidate_email);
                mainForm.find('[name="year_experience"]').val(res.year_experience).trigger('change');
                mainForm.find('[name="candidate_est_timetowork"]').val(res.candidate_est_timetowork).trigger('change');
                mainForm.find('[name="candidate_job_title"]').val(res.candidate_job_title);
                mainForm.find('[name="rank"]').val(res.rank).trigger('change');
                mainForm.find('[name="candidate_portfolio"]').val(res.candidate_portfolio);
                mainForm.find('[name="candidate_salary_expect"]').val(res.candidate_salary_expect);
                mainForm.find('[name="candidate_salary_expect_to"]').val(res.candidate_salary_expect_to);
                mainForm.find('[name="candidate_currency"]').val(res.candidate_currency);
                mainForm.find('[name="assessment"]').val(res.assessment);
                if (res.career) {
                    mainForm.find('[name="career[]"]').val(res.career.split(",")).trigger('change');
                } else {
                    mainForm.find('[name="career[]"]').val([]).trigger('change');
                }
                resetSkill();
                let skills = JSON.parse(res.main_skill);
                let i = 0;
                for (var k in skills) {
                    if (skills.hasOwnProperty(k)) {
                        if ($('.group-skill .item-group-skill:eq(' + i + ')').length === 0) {
                            $('[data-toggle="add-skill"]').trigger('click');
                        }
                        let val = skills[k];
                        $('.group-skill .item-group-skill:eq(' + i + ')')
                            .find('select').html("<option value='" + k + "'>" + k + "</option>")
                            .val(k).change();
                        $('.group-skill .item-group-skill:eq(' + i + ')')
                            .find('input')
                            .val(val);
                    }
                    i++;
                }
                let modalStep = $('[data-modal-step="modal-step"]');
                let currentStep = modalStep.data('step');
                let newStep = parseInt(currentStep) + 1;
                modalStep.removeClass('modal-step' + currentStep);
                modalStep.addClass('modal-step' + (newStep));
                modalStep.data('step', newStep);
            }
        })
    }

    function step2To3AddNewCv() {
        let modalStep = $('[data-modal-step="modal-step"]');
        let currentStep = modalStep.data('step');
        let newStep = parseInt(currentStep) + 1;
        modalStep.removeClass('modal-step' + currentStep);
        modalStep.addClass('modal-step' + (newStep));
        modalStep.data('step', newStep);
    }

    function step3To4() {
        $("#form_save_cv").submit();
    }

    $('[data-toggle="upload_cv_public"]').click(function () {
        $('#cv_public_modal').trigger('click');
    });

    $('[data-toggle="upload-file"]').click(function () {
        $('[data-toggle="private_cv_upload"]').trigger('click');
    });

    function validateSizeFile(file) {
        let $size = file.files[0].size;
        if ($size <= 5000000) {
            return true;
        }
        return false;
    }

    function validateExtension(file) {
        const name = file.files[0].name;
        const lastDot = name.lastIndexOf('.');
        const ext = name.substring(lastDot + 1);
        const arr = ['pdf', 'docx'];
        if (arr.includes(ext)) {
            return true;
        }
        return false;
    }


    $("#cv_public_modal").change(function () {
        $(".wapper-iframe iframe").attr('src', '');
        let validate = validateSizeFile(this);
        let validateExt = validateExtension(this);
        $('.wapper-iframe .error').html('').hide();
        $('.cv_public-error').html('').hide();
        let flagValidate = true;
        if (validate === false) {
            flagValidate = false;
            $('.cv_public-error').html($(this).data('mess-filesize')).show();
        } else if (validateExt === false) {
            flagValidate = false;
            $('.cv_public-error').html($(this).data('mess-extension')).show();
        }
        if (flagValidate) {
            var fileData = $('#cv_public_modal').prop('files')[0];
            let formData = new FormData();
            formData.append('file', fileData);
            $.ajax({
                url: $(this).data('url'),
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (result) {
                    if (result.status === 'success') {
                        let mainForm = $('[data-toggle="main-form"]');
                        mainForm.find('.error').html('').hide();
                        $('.drop-upload-file').removeClass('drop-upload-loading');
                        $("#cv_public_value").val(result.cv_public);
                        $("#cv_private_value").val(result.cv_private);
                        $('[data-toggle="download-file"]').attr('href', result.cv_private);
                        if (result.cv_private_link.includes('.pdf')) {
                            $(".wapper-iframe iframe").attr('src', result.cv_private_link);
                        } else {
                            $(".wapper-iframe iframe").attr('src', "https://view.officeapps.live.com/op/embed.aspx?src=" + encodeURIComponent(result.cv_private_link));
                        }
                        // $(".wapper-iframe iframe").attr('src', 'https://docs.google.com/gview?embedded=true&url=' + result.cv_private_link);
                        mainForm.find('[name="candidate_name"]').attr('readonly', false).val(result.name);
                        mainForm.find('[name="candidate_mobile"]').attr('readonly', false).val(result.phone);
                        mainForm.find('[name="candidate_email"]').attr('readonly', false).val(result.email);
                        mainForm.find('[name="year_experience"]').val('');
                        mainForm.find('[name="candidate_job_title"]').val('');
                        mainForm.find('[name="rank"]').val('');
                        mainForm.find('[name="candidate_portfolio"]').val('');
                        mainForm.find('[name="candidate_salary_expect"]').val('');
                        mainForm.find('[name="candidate_salary_expect_to"]').val('');
                        mainForm.find('[name="career[]"]').val([]).trigger('change');
                        mainForm.find('[name="assessment"]').val('');
                        mainForm.find('[name="candidate_est_timetowork"]').val('');
                        resetSkill();
                        if (result.skills.length > 0) {
                            for (let i = 0; i < result.skills.length; i++) {
                                if ($('.group-skill .item-group-skill:eq(' + i + ')').length === 0) {
                                    $('[data-toggle="add-skill"]').trigger('click');
                                }
                                let val = result.skills[i];
                                $('.group-skill .item-group-skill:eq(' + i + ')')
                                    .find('select').html("<option value='" + val + "'>" + val + "</option>")
                                    .val(val).change();
                            }
                        }

                        step2To3AddNewCv();
                    } else {
                        $('.cv_public-error').html(result.message).show();
                    }
                    $('.drop-upload-file').removeClass('drop-upload-loading');
                    $("#cv_public_modal").val('');

                },
                beforeSend: function () {
                    $('.drop-upload-file').addClass('drop-upload-loading');
                },
            });
        }
    });

    $('[data-toggle="private_cv_upload"]').change(function () {
        let validate = validateSizeFile(this);
        let validateExt = validateExtension(this);
        $('.wapper-iframe .error').html('').hide();
        let flagValidate = true;
        if (validate === false) {
            flagValidate = false;
            $('.private_cv_upload-error').html($(this).data('mess-filesize')).show();
        } else if (validateExt === false) {
            flagValidate = false;
            $('.private_cv_upload-error').html($(this).data('mess-extension')).show();
        }
        if (flagValidate) {
            let fileData = $('[data-toggle="private_cv_upload"]').prop('files')[0];
            let formData = new FormData();
            formData.append('private_cv', fileData);
            $.ajax({
                url: $(this).data('url'),
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (result) {
                    if (result.status === 'success') {
                        if (result.cv_private_link.includes('.pdf')) {
                            $(".wapper-iframe iframe").attr('src', result.cv_private_link);
                        } else {
                            $(".wapper-iframe iframe").attr('src', "https://view.officeapps.live.com/op/embed.aspx?src=" + encodeURIComponent(result.cv_private_link));
                        }
                        // $(".wapper-iframe iframe").attr('src', 'https://docs.google.com/gview?embedded=true&url=' + result.cv_private_link);
                        $("#cv_private_value").val(result.cv_private);
                    }
                },
                beforeSend: function () {
                    $('.drop-upload-file').addClass('drop-upload-loading');
                },
            });

        }
    });

    $('[data-toggle="authority"]').click(function () {
        let money = $('#job_bonus').val();
        if ($('#form_save_cv [name="is_self_apply"]').val() == 1) {
            money = $('#job_bonus_self_apply').val();
        }
        let money_authority = (parseInt(money) * parseInt($("#setting_authority").val())) / 100;
        if (money_authority == 'NaN') {
            money_authority = 0;
        }
        $("#money_authority").html(formatCurrency(money_authority));
        // if (jobData.bonus_type === 'onboard'){
        //     $('.action-group-checkbox').show();
        //     $('#mess-authority-onboard').show();
        // }
        // if (jobData.bonus_type === 'interview'){
        //     $('.action-group-checkbox').show();
        //     $('#mess-authority-interview').show();
        // }
        $("#modal-authority-confirm").modal('show');
    })

    $('[data-toggle="cancel-authority"]').click(function () {
        $("#modal-authority-confirm").modal('hide');
        $('[name="authority"]').prop("checked", false);
    })

    $('[data-toggle="confirm-authority"]').click(function () {
        $('.checkbox-confirm-error').hide()
        if ($("#checkbox-confirm").is(":checked")) {
            $("#modal-authority-confirm").modal('hide');
            $('[name="authority"]').prop("checked", true);
        } else {
            $('.checkbox-confirm-error').show()
        }

    })

    $("#modal-introduction-v2").on('hide.bs.modal', function (e) {
        // resetModal();
    })

    $('[data-toggle="dropfile"]').on("dragover", function (e) {
        e.preventDefault();
        e.stopPropagation();
    })

    $('[data-toggle="dropfile"]').on("drop", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $("#cv_public_modal").prop("files", e.originalEvent.dataTransfer.files).trigger('change');
    });

    $.fn.select2.amd.require([
        'select2/selection/single',
        'select2/selection/placeholder',
        'select2/selection/allowClear',
        'select2/dropdown',
        'select2/dropdown/search',
        'select2/dropdown/attachBody',
        'select2/utils'
    ], function (SingleSelection, Placeholder, AllowClear, Dropdown, DropdownSearch, AttachBody, Utils) {
        var DropdownAdapter = Utils.Decorate(
            Utils.Decorate(
                Dropdown,
                DropdownSearch
            ),
            AttachBody
        );

        var careerSelect = $('#career-select-modal');

        const careerDesktopSelect2Object = {
            dropdownParent: "#modal-introduction-v2",
            dropdownCssClass: "select2-career-modal",
            // minimumResultsForSearch: -1,
            allowClear: true,
            dropdownAdapter: DropdownAdapter,
            width: '100%',
            maximumSelectionLength: 3,
            // templateResult: function (data) {
            //     let values = careerSelect.val();
            //     if (!data.id) {
            //         return data.text;
            //     }
            //     let checked = '';
            //     if (values.includes(data.id)){
            //         checked = 'checked';
            //     }
            //
            //     var id = 'state' + data.id;
            //     let htmlCheckBox = '';
            //     htmlCheckBox = '<div class="row row-career-desktop-select2">' +
            //         '<div class="col-md-10">'+data.text+'</div> ' +
            //         '<div class="col-md-2 text-right">' +
            //         '<div class="checkbox-single-desktop-select2">' +
            //         '<input '+checked+' value="'+data.id+'" type="checkbox">' +
            //         '<span class="checkmark"></span>' +
            //         '</div> ' +
            //         '</div> ';
            //
            //     var $res = $("<label class='item-career-desktop-select2'>"+htmlCheckBox+"</label>", {id: id});
            //     return $res;
            // },
        };
        careerSelect.select2(careerDesktopSelect2Object);

    });

    $('.select2-introduction').select2({
        minimumResultsForSearch: -1,
        dropdownParent: "#modal-introduction-v2",
        width: '100%'
    });
    $('#candidate_currency').select2({
        minimumResultsForSearch: -1,
        dropdownParent: "#modal-introduction-v2",
        width: '120px'
    });

    // === Handlers cho nút "Cập nhật phiên bản CV mới nhất" và "Cập nhật CV đã che thông tin" ===

    // Click nút "Cập nhật phiên bản CV mới nhất" → trigger file input
    $('[data-toggle="re-upload-file-public-intro"]').click(function () {
        $('[data-toggle="public_cv_re_upload_intro"]').trigger('click');
    });

    // Khi chọn file public CV mới → AJAX upload
    $('[data-toggle="public_cv_re_upload_intro"]').change(function () {
        let validate = validateSizeFile(this);
        let validateExt = validateExtension(this);
        $('.public_cv_re_upload_intro-error').html('').hide();
        let flagValidate = true;
        if (validate === false) {
            flagValidate = false;
            $('.public_cv_re_upload_intro-error').html($(this).data('mess-filesize')).show();
        } else if (validateExt === false) {
            flagValidate = false;
            $('.public_cv_re_upload_intro-error').html($(this).data('mess-extension')).show();
        }
        if (flagValidate) {
            let fileData = $('[data-toggle="public_cv_re_upload_intro"]').prop('files')[0];
            let formData = new FormData();
            formData.append('public_cv', fileData);
            $.ajax({
                url: $(this).data('url'),
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (result) {
                    if (result.status === 'success') {
                        // Cập nhật lại CV public value
                        $("#cv_public_value").val(result.cv_public);
                        // Cập nhật lại CV private (che thông tin) nếu server trả về
                        if (result.cv_private) {
                            $("#cv_private_value").val(result.cv_private);
                        }
                        // Cập nhật lại iframe preview
                        if (result.cv_private_link) {
                            if (result.cv_private_link.includes('.pdf')) {
                                $(".wapper-iframe iframe").attr('src', result.cv_private_link);
                            } else {
                                $(".wapper-iframe iframe").attr('src', "https://view.officeapps.live.com/op/embed.aspx?src=" + encodeURIComponent(result.cv_private_link));
                            }
                        }
                        // Cập nhật link download
                        if (result.cv_private) {
                            $('[data-toggle="download-file"]').attr('href', result.cv_private);
                        }
                        $.toast({
                            title: 'Success',
                            content: 'Đã cập nhật file CV mới',
                            type: 'success',
                            delay: 5000
                        });
                    }
                },
                beforeSend: function () {
                    $('#loading-public-cv-re-upload-intro').show();
                },
                complete: function () {
                    $('#loading-public-cv-re-upload-intro').hide();
                    $('[data-toggle="public_cv_re_upload_intro"]').val('');
                },
            });
        }
    });
})




function validateSizeFile(file) {
    let $size = file.files[0].size;
    if ($size <= 5000000) {
        return true;
    }
    return false;
}

function validateExtension(file) {
    const name = file.files[0].name;
    const lastDot = name.lastIndexOf('.');
    const ext = name.substring(lastDot + 1);
    const arr = ['pdf', 'docx'];
    if (arr.includes(ext)) {
        return true;
    }
    return false;
}
