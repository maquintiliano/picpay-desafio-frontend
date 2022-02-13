import Swal from 'sweetalert2';
import { SweetAlertType } from '../types/sweet-alert.type';


export class SweetalertCustom {
    constructor() { }

    /**
     * Função para exibir o alerta pelo tempo
     * @param titleAlert Titulo que vai ser exibido no alerta
     * @param typeAlert Qual o tipo do alerta que deseja exibir
     * @param timerAlert Quanto tempo deseja exibir caso não queira o padrão
     */
    static showAlertTimer(
        titleAlert: string,
        typeAlert: any,
        textAlert?: string,
        timerAlert: number = 2000) {
        return Swal.fire({
            title: titleAlert,
            html: textAlert,
            icon: typeAlert,
            showConfirmButton: false,
            timer: timerAlert,
            allowOutsideClick: false,
        });
    }

    /**
     * Função para Exibir o alerta com confirmar e cancelar
     * @param titleAlert Titulo que vai ser exibido no alerta
     * @param typeAlert  Qual o tipo do alerta que deseja exibir
     * @param confirmButtonTxt Texto para ser exibido no Botão caso não queira o padrão
     * @param cancelButtonTxt Texto para ser exibido no Botão caso não queira o padrão
     * @param textAlert Texto complementar caso queira exibir
     */
     static showAlertQuestion(
      typeAlert: SweetAlertType,
      titleAlert: string,
      textAlert?: string,
      confirmButtonTxt = 'Sim',
      cancelButtonTxt = 'Não') {
      return Swal.fire({
          title: titleAlert,
          html: textAlert,
          icon: typeAlert,
          showCancelButton: true,
          confirmButtonColor: '#006A46',
          cancelButtonColor: '#DE2021',
          confirmButtonText: confirmButtonTxt,
          cancelButtonText: cancelButtonTxt,
          allowOutsideClick: false,
      });
  }

  /**
   * Função para exibir o alerta com apenas confirmar
   * @param titleAlert Titulo que vai ser exibido no alerta
   * @param typeAlert Qual o tipo do alerta que deseja exibir
   * @param confirmButtonTxt Texto para ser exibido no Botão caso não queira o padrão
   * @param textAlert Texto complementar caso queira exibir
   */
     static showAlertConfirm2(
      typeAlert: SweetAlertType,
      titleAlert: string,
      textAlert?: string,
      confirmButtonTxt = 'Ok') {

      if (Array.isArray(titleAlert) && titleAlert.length) {
          textAlert = '<ul class="text-left">';
          titleAlert.map(err => textAlert += `<li> ${err} </li>`);
          textAlert += '</ul>';
          titleAlert = 'Atenção!';
      }

      return Swal.fire({
          title: titleAlert,
          html: textAlert,
          icon: typeAlert,
          confirmButtonText: confirmButtonTxt,
          allowOutsideClick: false,
      });
  }

    /**
     * Função para exibir o alerta pelo tempo
     * @param titleAlert Titulo que vai ser exibido no alerta
     * @param typeAlert Qual o tipo do alerta que deseja exibir
     * @param timerAlert Quanto tempo deseja exibir caso não queira o padrão
     */
     static showAlertTimer2(
      typeAlert: SweetAlertType,
      titleAlert: string,
      textAlert?: string,
      timerAlert = 2000) {
      return Swal.fire({
          title: titleAlert,
          html: textAlert,
          icon: typeAlert,
          showConfirmButton: false,
          timer: timerAlert,
          allowOutsideClick: false,
      });
  }

    /**
     * Função para exibir o alerta com apenas confirmar
     * @param titleAlert Titulo que vai ser exibido no alerta
     * @param typeAlert Qual o tipo do alerta que deseja exibir
     * @param confirmButtonTxt Texto para ser exibido no Botão caso não queira o padrão
     * @param textAlert Texto complementar caso queira exibir
     */
    static showAlertConfirm(
        titleAlert: string,
        typeAlert: any,
        confirmButtonTxt: string = 'Ok',
        textAlert?: string) {
        return Swal.fire({
            title: titleAlert,
            html: textAlert,
            icon: typeAlert.type,
            confirmButtonText: confirmButtonTxt,
            allowOutsideClick: false,
        });
    }

    /**
     * Função para Exibir o alerta com confirmar e cancelar
     * @param titleAlert Titulo que vai ser exibido no alerta
     * @param typeAlert  Qual o tipo do alerta que deseja exibir
     * @param confirmButtonTxt Texto para ser exibido no Botão caso não queira o padrão
     * @param cancelButtonTxt Texto para ser exibido no Botão caso não queira o padrão
     * @param textAlert Texto complementar caso queira exibir
     */
    static showAlertConfirmAndCancel(
        titleAlert: string,
        textAlert?: string,
        typeAlert?: SweetAlertType,
        cancelButtonTxt: string = 'Não',
            confirmButtonTxt: string = 'Sim') {
        return Swal.fire({
            title: titleAlert,
            html: textAlert,
            icon: typeAlert,
            showCancelButton: true,
            confirmButtonColor: '#007DFE',
            cancelButtonColor: '#F5F5F5',
            cancelButtonText: cancelButtonTxt,
            confirmButtonText: confirmButtonTxt,
            allowOutsideClick: false,
        });
    }
}