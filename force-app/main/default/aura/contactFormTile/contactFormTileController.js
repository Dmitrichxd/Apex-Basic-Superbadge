({
    handleShowModal: function (component, event, helper) {
        let modalBody;
        let contact = component.get("v.contact");
        $A.createComponent("c:modalContent", { "contact": contact },
            function (content, status) {
                if (status === "SUCCESS") {
                    modalBody = content;
                    component.find('overlayLib').showCustomModal({
                        header: "Contact Review",
                        body: modalBody,
                        showCloseButton: true,
                        cssClass: "slds-modal_small"
                    })
                }
            }
        );
    }
})
