export const sortFunction = async (req,res,next) => {
    const  en = {
   
      new_text: "New",
      direct_agency: "Direct Agency", // My.vue testing locale
      createdAt: "Created At",
      transferCard: "KBZ Online Banking transfer",
      addTransferCard: "Add KBZ online banking transfer",
      withdrwalPassword: "Withdrawal Password",
      huiwang: "Huiwang Account",
      addHuiwang: "Add Huiwang Account",
      Name: "Name",
      selectHuiwang: "Select Huiwang Account",
      fillHuiwangAcc: "Fill in Huiwang Account",
      takeScreenShot:
        "After the transfer is successful, take a screenshot and contact customer service",
      fillInfoNormally:
        "The payer information can be entered into the account normally.",
      fillCorrect: "Please fill in correctly",
      rechargeAmount: "Recharge Amount",
      selectedRechargeMethod: "Please select the recharge method",
      enterRealName: "Please enter the payer’s real name",
      huiwangAccount: "Huiwang Account",
      endLevel: "Upgrade To",
      kyatAmount: "Kyat amount",
      allowEngOnly: "Username is wrong, please check carefully",
      listAmount: "Amount",
      EnterRMBamount: "Please enter amount in USD (dollars)",
      initialLevel: "Level From",
      state: "State",
      creationTime: "Creation Time",

      // dialog
      ok: "OK",

      // header
      progress: "Progress",
      appDownload: "APP download",
      appUpdateDownload: "App Update Required!",
      latestVersion:
        "Latest Version is Avaliable.Update your App for an improved experience!",
      updateNow: "Update Now",
      logoutConfirm: "Are you sure you want to log out of your account?",
      Exit: "Exit",
      exit: "Are you sure want to exit?",
      Wait: "Wait",
      ConfirmDelete: "Are you sure you want to Enable it?",
      DisableDelete: "Are you sure you want to Disable it?",
      deleteyes: "Yes",
      deleteno: "No",
      home: "Home",
      casino: `Bringing together the world's top electronic entertainment platform, thousands of slot games are waiting for you to fight! The tens of millions of jackpots are at your fingertips, waiting for you to start!`,
      jackpot: "10 Million Jackpot",
      prize: "Prizes are imminent",
      gameContent: `The mobile betting platform is oriented to players on the entire network, providing nearly 10,000 types of electronic games, slot machines, baccarat and lottery games,
            Sports betting, online deposit and online withdrawal, one-click operation,
            Using 3D real-time computing to create real scenes combined with stereo images, a fully planned cross-system entertainment platform,
            Integrate synchronous accounts and data transmission to achieve the concept of uninterrupted entertainment anytime, anywhere. It is easy to show in a small size, entertainment is at your fingertips, and wealth is at your fingertips.`,
      afterlogin: "After login, scan the code to download the APP",
      device: "All mobile devices",
      notNeedDownload: "Mobile phone does not need to download",
      enterUrl: "Enter the URL in the browser to access",
      announcement: "Announcement",
      marquee_notice: "Notice",
      titlehome: "HOME",
      homeLogin: "Login",
      registerBtn: "Register",
      seeMore: "See More...",
      popular: "Popular",

      // Footer
      center: "Member Center",
      promo: "Promotions",
      promotion: "Promotion center",
      promotionHall: "Promotion Hall",
      alternate: "Alternate URL",
      vipClub: "VIP Hongjing Club",
      newHelping: "New Help",
      customerCenter: "Customer Service",
      regulatory: "Regulatory Authority",
      authorized: "Authorized",
      marquee:
        "This platform is carefully built with everything you need, including electronic games, live video, chess and cards, and fishing e-sports, just to give players a better experience 1. ☆☆☆Recharge recommendation☆☆☆ Recharge first choice [USDT] transfer: Dear members, due to the recent instability of third-party recharges, [USDT] transfer recharge, no review is required, and the account will be credited in seconds. Large amounts are worry-free. Please fill in the deposit address correctly, and the money will be credited in seconds! ",

      // about page
      problem1: "1. What is the group’s online entertainment strength?",
      problem1detail: 'Hello, please refer to the main page "About Us"',
      problem2: "2. Is it safe to play games in your company?",
      problem2detailone:
        "Hello, our company's system is absolutely safe. We will never disclose the personal information of customers to any commercial organization. In addition, we also require banks with transactions, credit card intermediary",
      problem2detailtwo:
        "Agents and other strictly confidential customer information. All deposits will be treated as trade accounts and will not be handed over to other persons",
      problem3: "3. Is online gambling legal?",
      problem3detailone:
        "Hello, we are a gaming company legally registered in the Philippines. All gaming operations are in compliance with the treaties of the Philippine government and are not subject to the jurisdiction of other regions. Please follow your own risk tolerance",
      problem3detailtwo:
        "Power and local law determine whether to place a bet. The company cannot and will not accept any liability arising from violation of local laws by any person",
      problem4:
        "4. Is there an age limit for betting in Group Online Entertainment?",
      problem4detail: "Hi, Yes, the legal age to bet must be 18.",
      problem5: "5. Do I need to fill in my real name when opening an account?",
      problem6detail:
        "Hello, please contact the 7*24-hour online customer service to apply for a password change after checking your identity.",
      privacyPolicy: "Privacy Policy",

      //Disclaimer
      disclaimer: "Disclaimer",
      disclaimer_1:
        "1. The daily withdrawal limit is 1,000,000.00 RMB. After completing the full valid bet, the handling fee is completely waived;",
      disclaimer_2:
        "2. The withdrawal processing time is generally 3-5 minutes. In case of bank system maintenance or financial settlement and other force majeure factors, the processing time may be delayed or withdrawals may be suspended;",
      disclaimer_3:
        "3. For all online betting, if no promotion is applied, a valid turnover of 1x the deposit amount must be completed before applying for withdrawal. For promotions, please refer to the relevant turnover requirements;",
      disclaimer_4:
        "4. The company reserves the right to review member accounts;",
      disclaimer_5:
        "5. Various games and rounds/unaccepted/canceled bets are not included in the calculation of valid bets. For sports betting projects, high-odds bets calculate valid bet amounts, while low-odds bets calculate win/loss amounts as valid bets (high-odds products include: parlays, correct score, total goals, half/full time, double chance, championship, etc.);",
      disclaimer_end:
        "If you have any questions, please contact 24-hour online customer service.",

      privacy_rule_1:
        "1. AK Group highly respects and values the privacy of its members.We are committed to ensuring the safety and confidentiality of your personal information and data, so our clients can use our services with peace of mind. This principle is at the core of our long-standing privacy policy.",
      privacy_rule_2:
        "2. AK Group will never disclose any personally identifiable information to third parties, unless required by a court subpoena or legal obligations.We reserve the right to provide necessary personal information to payment platform providers and financial or insurance institutions in order to fulfill transaction requests.",
      privacy_rule_3:
        "3. All personal information provided by members is transmitted via 128-bit SSL encrypted secure channels, and is stored in a confidential environment inaccessible to the general public. Internal data access is strictly restricted and rigorously monitored.",
      protect_data:
        "The following outlines our rules regarding the protection of customers’ personal data:",
      protect_rule_intro: "Our website services are provided by AK Group. ",
      protect_rules:
        "To offer a secure and enjoyable experience, we take a rigorous approach to handling client privacy.To offer enhanced services, we may sometimes request your personal information. This policy outlines how we use and process your data.In some cases, you may need to provide information such as your name, mailing address, email address, member ID, phone number, date of birth, or payment details.Any data you provide will be processed strictly in accordance with this privacy policy and relevant legal requirements.We may also monitor your activity on our website — including page visits, traffic data, and source domains — to improve service quality and build aggregated user profiles. These statistics are anonymized and cannot be used to identify individuals.",

      data_confident: "Data Confidentiality",
      data_confident_content:
        "AK Group will do its utmost to protect any personal data provided to us.We will not intentionally disclose this data to third parties unless explicitly stated in this policy.All AK Group employees are required to comply with this privacy policy and are bound by confidentiality obligations, even after leaving the company.You are also responsible for safeguarding your personal information and account credentials, and should not share your password with others.",
      service_statement: "Service Statement",
      service_statement_content:
        "To ensure quality service, prevent fraud, and maintain regulatory compliance, we may retain and monitor customer communication records (e.g., calls and emails).You have the right to request that we do not use your personal information for direct marketing purposes.To exercise this right, you should submit a written request including proof of identity (e.g., account ID, username, registration details), and indicate the inaccurate data and necessary corrections.By registering an account with AK Group, you agree to the terms of this privacy policy.We may update this policy periodically, and encourage you to review it regularly.Any updates will be posted on relevant pages, and continued use of our website after changes constitutes acceptance of the new policy terms.If you do not accept the changes, you may opt to discontinue using our services.In the event of conflict between this policy and any specific terms, the specific terms shall prevail.",

      contact: "Contact Us",
      contactone: "1. Contact information of the joint venture plan",
      contactonedetail: "1. Joint Venture Skype",
      contacttwo: "2. Customer service email",
      contactthree: "3. Online customer service",
      contactservice:
        "Our customer service personnel continue to uphold a dedicated service attitude, and the online customer service will provide you with consultation and assistance 24 hours a day",
      agentRegister: "Agent",
      parentId: "Parent Id",
      aboutus: "About Us",
      autoplay: "Auto Play",

      // transRecord
      number: "No.",
      time: "Time",
      transaction_type: "Transaction Type",
      transaction: "Deposit and withdrawal records",
      currency: "Currency",
      noData: "No Data",
      selectDate: "Select Date",
      startDate: "Start Date",
      endDate: "End Date",
      date: "Date",
      timeSection: "Time Selection",
      search: "Search",

      //for navbar items
      transRecord: "Transaction Record",
      rechargeRewards: "Recharge rewards",
      rolloverRewards: "Rollover Rewards",
      betRecord: "Betting Record",
      rebateRecord: "Rebate Record",
      accountDetail: "Account Detail",

      // Rebate  Details
      rebateyesterday: "Yesterday",
      rebateweek: "This week",
      rebatemonth: "This month",
      outstanding_balance: "Outstanding balance",
      rebate_ratio: "Rebate ratio",
      last_month_balance: "Last month balance",
      rewardRecord: "Reward Record",
      days7: "7 Days",
      days15: "15 Days",
      days30: "30 Days",
      lastWeek: "Last Week",
      last7Days: "Last 7 Days",
      rebateDetails: "Rebate Statistics Details",
      queryID: "Query ID",
      ID: "ID",
      rewardserial: "Serial Number",
      cycle: "Billing cycle",
      rewardstransaction: "Transaction ID",

      // bet_record
      category: "Category",
      gameName: "Game Name",
      gameSupplier: "Game Supplier",
      winLoss: "Win/Loss",
      benefit: "Benefit",
      betStatus: "Status",
      bonus: "Total bonus amount",
      promotionalBonus: "Promotion Bonus",
      totalLoss: "Total Losing Amount",
      totalWin: "Total Winning Amount",
      betTime: "Betting Time",
      action: "Action",

      // mine
      account: "Account",
      birthday: "Birthday",
      mail: "Mail",
      joinUs: "Join Us, Day 1",
      logout: "Sign Out",
      myaccount: "My account",
      deposit: "Deposit",

      // withdrawl
      withdrawl: "Withdrawl",
      support: "Technical support service",
      personal: "Personal center",
      card: "My Card",
      loginPass: "Login Password",
      forgetPass: "Forget Password",

      // regitster
      registerAccount: "Register Account",
      phone: "Phone",
      limitPassword: "Password (at least 8 characters, English and numbers)",
      confirmPassword: "Confirm Password",
      memberProfile: "Profile",
      withdrawlPassLimit: "Please enter the 6-digit number withdrawal password",
      withdrawlPassConfirm: "Confirm withdrawal password",
      inviterId: "Inviter Id",
      verifiyCode: "Verification code",
      confirmBox:
        "By confirming the operation, it is assumed that you are of legal gambling age and agree to all account opening terms.",
      confirmBtn: "Confirm",
      vipPermission: "VIP Permissions",
      addWalletAddress: "Add Wallet Address",
      usdtAddress: "USDT Address",
      selectProtocol: "USDT Type",
      usdtSuccess: "USDT payment successful",
      disable: "Disable",
      enable: "Enable",
      wallet: "Wallet",
      withdrawlPass: "Withdrawl password",
      personalInfo: "Personal Information",
      levelUpdate: "The update time is settled according to the system",
      current: "Current",
      bankInfo: "Bank information",
      cardNumber: "Card Number",
      holder: "Holder",
      bankCard: "Bank Card",
      addBankCard: "Add Bank Card",
      addUSDT: "Add USDT",
      USDTAmountEmpty: "Amount cannot be empty",
      minUSDTRechargeAmount: "USDT minimum deposit amount: ",
      maxUSDTRechargeAmount: "USDT maximum deposit amount: ",
      maxUSDT: "USDT maximum withdrawal:",
      rechargeTimeout: "Recharge time out",
      maxAmountError: "Your withdrawal balance is insufficient",
      chooseBank: "Choose Bank,",
      chooseUSDT: "Choose USDT",
      bankAddress: "Bank Address",
      cardHolder: "Card Holder",
      plzenter: "Please Enter",
      deleteBtn: "Delete",
      oldPass: "Old Password",
      newPass: "New Password",
      confirmNewPass: "Confirm new password",
      enterReason: "Please enter the reason for rejection",
      cancel: "Cancel",
      confirm: "Confirm",
      sure: "Sure",
      choose: "Choose",
      select: "Select an option",
      cellphone: "Cell Phone",
      protocol: "Protocol",
      walletAddress: "Address",
      operate: "edit",
      realName: "Real Name",
      enterEmailAddress: "Enter email address",

      // activity
      applyNow: "Apply Now",
      applyLogin: "LogIn for apply promotion.",
      unavailableActivity: "Already applied, cannot apply again",
      contentRequired: "The subject cannot be empty",
      issueTypeRequired: "The content cannot be empty",

      // recharge
      recharge: "Recharge",
      pay_amount: "Pay Amount",
      pay_address: "USDT payment address of TRC20",
      alipay_url: "Alipay payment address",
      pay_complete:
        "Please complete payment within 30 minutes: otherwise the order will be invalid",
      time_left: "time_left",
      tip: "Tips",
      payment: "Payment",
      supportBank: "Select Bank",
      choosePayment: "Select Payment",
      enterDepositAmount: "Enter deposit amount",
      yuan: "Yuan",
      all: "All",
      claimNow: "Claim Now",
      claimed: "Received",
      submitBtn: "Submit",
      slotNo8ExtremeChallenge: "8 times brings fortune",
      tip1: "① Antoken is the world's leading virtual currency online wallet. Deposits and withdrawls are automatically received in real time, making transfer transactions faster and safer.",
      tip2: "② Antoken personal wallet APP download: click to directly visit the website https://antoken.pro",
      tip3: "③ Every time you make a deposit, you need to use the deposit channel to obtain the latest payment information. The payment information will be changed from time to time. Please do not use the old payment card information in the deposit record, otherwise the account will not be credited.",
      tip4: "④ The payment amount must be consistent with the submitted amount. Please do not modify the amount, otherwise the score increase will not be possible or the score increase speed will be affected.",
      tip5: "⑤ Dear members, due to the active participation of online members and the fact that there are many popular events, the deposit business of the website has increased sharply. In order to ensure that your deposits are received in time, it is recommended that you avoid [23:55-00:05] During peak deposit times at night or choose to use AnToken to deposit.",
      tutorial: "Tutorial",
      realNameChannel:
        "Real-name channel: enable online banking, Alipay, and UnionPay Cloud QuickPass",
      realNameChannelContent:
        "The channel is not bound to a name or mobile phone number. The system will pop up a prompt window to bind the name and verify the mobile phone number. After the binding verification is completed, If the member has not bound the bank card information to the deposit bank card, a pop-up window will prompt to jump to the deposit bank card to bind the payment bank card information page before making a deposit. deposit channel is safer and faster.",
      exchangeRate: "USDT to RMB reference exchange rate",
      exchangeUsdtRate: "Reference USDT exchange rate",
      exchangeRateMMK: "Reference RMB to Myanmar Kyat exchange rate",
      comment: "Comment ",
      rechargeConfirm: "Recharge completed successfully",
      addBankAccount: "Payment card number",
      accountNumber: "Account Number",
      copyOrderNo:
        "When transferring money, please copy this order number so that customer service can confirm it.",
      withdrawConfirm: "Are you sure you want to withdraw?",
      emailConfirm: "Are you sure you want to delete email?",
      withdrawlAccountName: "Name",
      teamPerformance: "Team performance",
      openBank: "Bank",
      bankName: "Bank Name",
      withdrawlRate:
        "The range of withdrawal funds cannot be less than 100 yuan.",
      USDTChoose: "Select USDT protocol",
      withdrawlAmount: "Withdrawal amount",
      Kyat: "Kyat",
      USDTprotocol: "USDT Protocol",
      bank: "Bank",
      fullAmount: "Full Amount",
      checkboxAmount: "Select the full amount, that is, withdraw all",
      enterWithdrawlPass: "Enter the withdrawal password",
      withdrawlTip1:
        "Please wait patiently for 10-15 minutes after the bet settlement is completed, and the system will automatically correct the effective flow. For detailed and effective flow rules, please consult the official website [Online Customer Service]",
      withdrawlTip2:
        "Deposits that have not participated in any promotional activities need to bet 1 times the effective turnover (the full amount of bets) before you can withdraw. If you participate in the event, please refer to the [Activity Bonus Rollover Related Rules].",
      withdrawlTip3:
        "Your withdrawal will be paid in one or more payments based on the bank's payment risk control system. ManBetX hereby promises to ensure that the amount received is consistent with the amount withdrawn.",
      withdrawlTip4:
        "In order to ensure that your withdrawal amount reaches your account safely, the issuing bank does not support [Online Merchant Bank] and [WeBank]. If you need to withdraw money, please bind other issuing banks to submit. Thank you for your cooperation.",
      // rebate
      accumulatedcollection: "Accumulated collection",
      bets_next_level:
        "To upgrade your accumulated bets to the next level, you need",
      lastNextLevelRecharge: "yuan recharge",
      DistanceNextLevel: "Distance to next level",
      selectAll: "Select all",
      replyMessage: "Show only replyable messages",
      accumulatedRecharge: "Accumulated Recharge",
      toBeCollect: "To be collected",
      categories: "All Categories",
      validBet: "Valid Bet",
      unrebateAmount: "Amount not rebated",
      rebateAmount: "Rebate Amount",
      rebateAssignType: "Assign Type",
      rebateTime: "Rebate time",
      play: "Play",
      clickToClaim: "Claim",
      page: "Page",
      total: "Page",
      totalpage: "Page",
      point: "pieces of data",
      of: "of",
      myRebate: "Rebate",
      envelope: "Red Envelop",
      activityRecord: "Activity Record",

      // envelope
      remain: "Remaining",
      receiveRedEnvelope: "Receive Red Envelope",
      startRechargeAmount: "Start Recharge Amount",
      endRechargeAmount: "End Recharge Amount",
      envelopeAmount: "Red Envelope Amount",
      rechargeTime: "Recharge Time",
      collectTime: "Collection Time",

      // activity record
      memberAccount: "Member Account",
      appAccount: "Account",
      eventTitle: "Event title",
      typeOfActivity: "Type of Activity",
      applicationTime: "Application time",

      // hot message
      platformAnnounce: "Platform Announcement",
      platformAnnounceContent:
        "This platform is carefully built with everything you need, including electronic games, live video, chess, and fishing e-sports, just to give players a better experience. 1. ☆☆☆Recharge recommendation☆☆☆ Recharge first choice [USDT] transfer: Dear members, due to the recent instability of third-party recharges, [USDT] transfer recharge, no review is required, and the account will be credited in seconds. Large amounts are worry-free. Please fill in the deposit address correctly, and the deposit will be credited in seconds. ",
      siteMessage: "Message",
      feedbackMessage: "Feedback Message",
      feedback: "Feedback",
      informationList: "Information list",
      selectFeedbackType:
        "Please select the question you want to give feedback.",
      subject: "Subjects",
      titlePlaceholder: "Please enter a title (limited to 100 words)",
      contentPlaceholder:
        "Please describe your problem (limited to 1000 words)",
      uploadImage: "Upload Image",
      imageFileLimit:
        "Image file format: png, jpg, and jpeg.File size limit: 2MB.Retain: 7 days.",
      welcomeCustomer: "Dear customers: Welcome to AK Entertainment",
      uptodate: "Up To Date",
      content: "Content",
      obey: "Obey",
      orderOfSite: "Please consciously abide by the order of this site",

      // agent site
      agentSystem: "Agent Management",
      agentLogin: "Agent Login",
      returnHome: "Back",
      inputUsername: "Enter Username",
      inputUser1name: "请输入6-16字母及数字组合的账号",
      inputPassword: "Enter Password",
      inputRegisterPassword: "请输入密码 (8-20位数字+字母组合)",
      inputCode: "Verification Code",
      cancelModel: "Cancel",
      backToHome: "Back To Home",
      sureBackHome:
        "Are you sure you want to exit and return to the home page?",
      hint: "Hint",
      dataManagement: "Management",
      agentHomePage: "Agent Homepage",
      agencyProfile: "Agent Profile",
      todayOverView: "Today Overview",
      username: "Username",
      refresh: "Refresh",
      welcome: "Welcome to Hualong",
      todayRechargeAmount: "Today’s recharge amount",
      rmbAmount: "元 amount",
      usdtAmount: "USDT Amount",
      managementAmount: "Management amount",
      todayWithdrawlAmount: "Today’s withdrawal amount",
      listOfPlayer: "List of players",
      playerList: "Player",
      confirmList: "Blacklist blocked",
      totalRechargeList: "Total recharge of this month",
      count: "Count",
      monthWithdrwal: "Total withdrawals this month",
      totalWinLose: "Total win and loss",
      teamWinLose: "Team win/loss total",
      viewDetails: "View Details",
      rebatetoday: "Today",
      thisMonth: "This Month",
      thisWeek: "week",
      thisPercent: "Agent rebate ratio",
      agentAccountDesc:
        "This amount of points is only used for players to play games, and the final settlement is based on the actual consumption bill.",
      invitationCode: "Invitation Code",
      withdrawlReview: "Withdrawl Review",
      actualPayment: "Payment",
      bankCardNumber: "Bank Card Number",
      remark: "Remark",
      createTime: "Time",
      pending: "Pending",
      passed: "Pass",
      passedConfirm: "Are you sure you want to pass?",
      rejected: "Reject",
      underReview: "Under Review",
      memberList: "Member List",
      paymentList: "Payment List",
      createMember: "Create Member",
      customerBalance: "Customer Balance",
      memberlevel: "Membership Level",
      superAgent: "Super Agent",
      yes: "Yes",
      no: "Not",
      block: "Block",
      invitation: "Invite Code",
      activate: "Active",
      closed: "Close",
      suspend: "Suspend",
      rechargeReview: "Recharge Review",
      accountType: "Account Type",
      copy: "Copy",
      rewardtitle: "Recommended and QR codes",
      qrcode: "Save QRcode",
      depoistTime: "Deposit Times",
      withdrawlTime: "Withdrawl Times",
      totalDeposit: "Total Deposit",
      totalWithdrawl: "Total Withdrawl",
      totalValidBet: "Total Valid Bet",
      winloseAmount: "WinLose Amount",
      totalRebate: "Total User Rebate Amount",
      bonusGive: "Bonus",
      noRecord: "No matching records",
      profitloss: "Profit & Loss",
      profitLossStatement: "Profit and Loss Statement",
      commissionPayment: "Commission Payment",
      commissionPaymentRecord: "Commission Payment Record",
      transactionTime: "Transaction Time",
      balanceBeforeTransaction: "Balance Before Transaction",
      balanceAfterTransaction: "Balance After Transaction",
      rechargeGift: "Recharge Gift",
      eventGift: "Event Gift",
      bonusGift: "Bonus Giveaway",
      commissionReport: "Commission Report",
      numberSubordinate: "Number Of Subordinate",
      totalAmountOfwinloss: "Total Winning And Losing Amount",
      agentcommissionreport: "Agent Commission Report",
      totaleffectivebets: "Total Effective Bets",
      agencyrebate: "Agency Rebate",
      profitfromwinningorlosing: "Profit From Winning Or Losing",
      totalAmountOfbet: "Total Effective Bets",
      totalRechargeAmount: "Total Recharge Amount",
      bettingRecord: "Betting Record",
      financialRecord: "Financial Record",
      platformName: "Platform Name",
      transactionId: "Transaction Id",
      bettingContent: "Betting Content",
      categoryName: "Category Name",
      totalBetAmount: "Total Bet Amount",
      effectiveBetAmount: "Effective Bet Amount",
      profit: "Profit",
      winningStatus: "Status",
      whetherRebate: "Whether To Rebate",
      memberShiprebate: "Member Rebate",
      userInfo: "Member Info",
      password: "Password",
      memberAccountType: "Member",
      edit: "Edit",
      balance: "Balance",
      checkIn_rewards2: "Checkin Reward",
      distributionRecord: "Distribution Record",
      depositAndPlay: "deposit and play",
      claimDeadline: "claim deadline",
      sent8: "always sent 8",
      dailyCheckIn: "daily checkin",
      maxClaimed: "max claimed",
      settlementPeriod: "settlement period",
      distributedTotal: "distributed total",
      serialNo: "serial No",
      distributionTime: "distribution time",
      transactionType: "transaction type",
      transactionAmount: "transaction amount",
      depWidBetProLoss: "dep widbet profit/loss",
      transactionCategory: "transaction category",
      dispatchTime: "dispatch time",
      transaction75: "transaction 75",

      //agent member list
      commission: "commission",
      commissionRateSetting: "commission rate setting",
      editForm: "Editing",
      create_sub_user: "Create Sub User",
      change_password: "Change Password",
      blacklist: "Blacklist",
      identity: "Identity",
      agent_mobile: "Superior agent",
      user_mobile: "Mobile number",
      user_status: "User Status",
      last_login_ip: "Last Login ip",
      last_login_country: "Last Login Country",
      last_login_city: "Last Login City",
      last_login_time: "Last Login time",
      agent_status: "Agent status",
      updated_at: "Update Time",

      //payment list
      financial_type: "Financial Type",
      currentBalance: "Current Balance",
      for_user: "for user",
      search_phone: "search with phone",
      search_username: "search with username",

      // mobile
      mobileRecharge: "Deposit",
      mobileWallet: "Wallet",
      hot: "Hot",
      moibleActivity: "Activity",
      allData: "All",
      missionReward: "Mission Rewards",
      eventDetail: "Event Detail",
      gift: "Exclusive gifts for consecutive wins",
      mobileVip: "VIP privileges",
      mobileInfo: "My Info",
      basicInfo: "Basic Info",
      modifyBasicInfo: "Edit Info",
      needHelp: "Need Help",
      plzContactService: "please contact customer service",
      selfService: "Self Service",
      accountManagement: "Account change details",
      detail: "Detail",
      mobileVipLevel: "VIP Level",
      vipNote1: "Terms and conditions of the event",
      vipNote2:
        "General terms and conditions of the event. The platform reserves the right to modify, stop and make final interpretation of the event.",
      modifyTextInfo:
        "For your privacy, this cannot be modified. Please contact customer service.",
      changePass: "Change Password",
      totalAsset: "Total Asset",
      bankDetail:
        "Please check the virtual currency wallet address carefully. If the wallet is wrong, the funds will not be received. Based on the distributed encryption system, your assets are fully protected.",
      datePlaceholer: "Y-m-d",
      get_sms_code: "Get Verification Code",
      send: "Send",
      liveChatWelcome:
        " I am happy to serve you. I will answer everything you need to know in a few moments.",
      increasePoints: "To increase the points",
      reducePoints: "reduce points",
      problemGame: "Problems during the game",
      otherQuestions: "Other questions",
      chatCustomerService: "Hualong Customer Service",
      whether_rebate: "Whether to rebate",
      Cashback_record: "Cashback record",
      online_status: "Online Status",
      commission_rebate: "One-Click-Rebate",
      total_rebate_amount: "Total Agent Rebate Amount",
      totalProfit: "Total profit",
      recharge_vip_level: "Recharge VIP level",
      sharereward: "Reward for referring friends",
      vip_effective_bet_level: "VIP effective betting level",
      total_amount_received: "Total amount received",
      recharge_amount: "Recharge amount",
      valid_bets: "Cumulative valid bets",
      valid_bets_collected: "Valid bets collected",

      //app info
      version: "Version",
      size: "Size",
      update_time: "Update Time",
      match_android: " Suitable for Android phones",
      china_download: "Domestic download",
      oversea_download: "Overseas download",
      match_ios: "Applicable to Apple mobile phones",
      click_download: "Download",
      suggest_message: "Must be downloaded using iPhone’s Safari browser",

      // Responsibility Page
      responsible_game: "Responsible Gaming",
      bet_res: "1. Betting Responsibility",
      bet_res_content:
        "AK Group is a professional online entertainment platform. However, we strongly recommend that all players maintain a mindset of entertainment when participating in our games.We aim to provide a comfortable and healthy gaming environment through an exceptional user experience, disruptive entertainment products, and ultra-localized personalized services.We hope all players can adjust their mindset while gaming and avoid allowing excessive gaming to negatively affect their finances, career, or family life.We strongly advise you to reassess your behavior, clarify and adjust your attitude toward entertainment, and reintegrate into a normal life and work routine.",
      age_requ: "2. Age Requirement: Over 18",
      age_requ_content:
        "You must be over 18 years old (or not considered a minor under the laws of your jurisdiction) to access this website.No one under the age of 18 is allowed to open an account or place bets on our website. We treat and handle this issue with the utmost seriousness.",
      gamb_pb_prevent: "3. Gambling Problem Prevention",
      gamb_pb_prevent_content:
        "We strongly recommend that you regularly assess your betting behavior to check if it has become excessive.",
      gamb_pb_prevent_1: "1.Have you ever missed work due to gambling?",
      gamb_pb_prevent_2: "2.Has gambling affected your reputation?",
      gamb_pb_prevent_3:
        "3.After gambling, do you feel guilty? Have you ever used winnings to repay debts or solve financial difficulties?",
      gamb_pb_prevent_4: "4.Has gambling reduced your ambition or efficiency?",
      gamb_pb_prevent_5:
        "5.After losing, do you feel the urge to return quickly to win back what you lost?",
      gamb_pb_prevent_6:
        "6.After winning, do you feel a strong desire to return and win more?",
      gamb_pb_prevent_7: "7.Do you often gamble until you have no money left?",
      gamb_pb_prevent_8: "8.Do you borrow money to gamble?",
      gamb_pb_prevent_9:
        "9.Have you sold any belongings to fund your gambling?",
      gamb_pb_prevent_10:
        "10.Are you reluctant to use your gambling funds for regular expenses?",
      gamb_pb_prevent_11:
        "11.Has gambling caused you to neglect the health and happiness of yourself and your family?",
      gamb_pb_prevent_12:
        "12.Do you spend more time gambling than you initially planned?",
      gamb_pb_prevent_13:
        "13.Do you use gambling as an escape from worry or problems? Have you committed or considered committing a crime to fund your gambling?",
      gamb_pb_prevent_14: "14.Has gambling caused you difficulty sleeping?",
      gamb_pb_prevent_15:
        "15.Have arguments, disappointment, or frustration pushed you toward gambling?",
      gamb_pb_prevent_16:
        "16.Do you feel the urge to celebrate after hours of gambling due to a lucky streak?",
      gamb_pb_prevent_17:
        "17.Have you ever harmed yourself or considered suicide because of gambling outcomes?",

      //AgentJoin.vue
      agent_ptnship: "Agent Partnership",
      agent_ptnship_anoy1:
        "Join Hualong, be your own boss with truly zero investment, zero risk, and guaranteed commission.",
      agent_ptnship_anoy2:
        "A brand-new agent model with unlimited dual commissions.",

      glorious_life: "A glorious life starts here",
      intro:
        "Hualong Group was established in 2007. As one of the most representative and well-known international betting companies, it holds both physical casino and online betting licenses, offering the widest range and most competitive live baccarat, dragon tiger, sports betting, casino slots, virtual games, poker games, and more. Over the years, with stable operations, it has successfully expanded its user base globally. We sincerely provide you with the highest-level cooperation platform and the best agent partnership plan!",

      agent_is:
        "Being an agent is like starting your own company and being your own boss. Hualong Group provides strong financial support to help you become a boss, guiding you step by step to start a business and achieve wealth. Truly zero investment, zero risk, and stable income, allowing you to earn money even while sleeping.",
      agent_plans:
        "The best agent partnership plan, eight irresistible advantages!",
      agent_plan_1:
        "1. Pioneering a brand-new agent model with the highest commission model;",
      agent_plan_2:
        "2. Zero cost, zero risk, high returns, and fast commission settlement;",
      agent_plan_3:
        "3. Dual income, stable high income regardless of offline customer wins or losses;",
      agent_plan_4:
        "4. Fast withdrawals with no cap on amounts, backed by strong financial strength;",
      agent_plan_5:
        "5. Years of operation with a large user base, loved by players;",
      agent_plan_6:
        "6. Holding both physical casino and online betting licenses, ensuring credibility;",
      agent_plan_7:
        "7. Years of extensive promotion, internationally renowned brand, allowing agents to enjoy the benefits of brand advertising;",
      agent_plan_8:
        "8. Detailed data information, enabling you to check subordinate deposits and betting records.",
      provide_ptn:
        "Hualong Group provides partners with the highest profit returns. As long as you become our agent, have connections, or actively promote and develop subordinates, no fees are required. Losses are fully borne by us, allowing you to truly sit back and enjoy high returns, earning money even while sleeping.",
      join_us: "Join Hualong Group, your wealth choice, safe and reliable.",
      ptn_earn:
        "Partner with Hualong to earn millions monthly. We invite you to join!",

      //MobileAgencyRule
      agency_rules: "Agency Rules",
      agency_rules_intro:
        "The rebate commission process for agent wins and losses involves multiple steps, from recruiting clients to calculating and distributing commissions. Below is a detailed explanation of the process:",
      agency_rule_1:
        "1. Agent Registration and Cooperation Agreement--  Register as an agent: Agents must register on the platform, sign a cooperation agreement, and set up a commission rebate mechanism (including commission rate and settlement period).Confirm commission rate: The agent and platform will agree on a commission rate, often including tiered rates based on client performance, such as a pyramid structure.",
      agency_rule_2:
        "2. Client Acquisition--  Promotion and traffic generation: Agents attract clients to the platform through various channels (social media, websites, offline marketing, etc.).  Client binding: Clients register on the platform using the agent’s referral link or invitation code, linking their account to the agent.",
      agency_rule_3:
        "3. Client Activity Participation--  Client engagement: Clients carry out activities on the platform such as trading, betting, or investing, generating win/loss outcomes.  Real-time tracking: The platform tracks the client's transaction amounts and win/loss results in real-time, monitoring profitability for each client.",
      agency_rule_4:
        "4. Win/Loss Data Statistics--  Monthly win/loss statistics: The platform calculates the net win/loss of clients referred by the agent each month.  Applying commission rates: Based on the agreed commission structure, the platform calculates commissions using the client’s performance. Common methods include:  - Based on net losses: e.g., Client loss amount × commission rate (e.g., 30%)  - Based on net profit: Some platforms may also offer a percentage rebate for profitable clients.",
      agency_rule_5:
        "5. Tiered and Multi-Level Rebates--  Tiered rebates: The agent's commission rate may increase as the client's win/loss amount reaches different thresholds. For example, larger net losses may result in higher commission rates.",
      agency_rule_6:
        "6. Commission Settlement and Payout--  Commission calculation: At the end of each monthly settlement period, the platform calculates the agent’s commission based on the net win/loss of their clients and the agreed rates.  Payout: The calculated commission is credited to the agent’s account, which can be withdrawn according to platform rules.",
      agency_rule_7:
        "7. Platform Reconciliation and Confirmation--  Data review: Before commission payout, the platform will review win/loss records and commission calculations to ensure accuracy.  Agent confirmation: After receiving the commission, agents can review their account statements to verify the amount is correct.",
      agency_rule_8:
        "8. Client and Agent Maintenance--  Ongoing promotion and support: Agents are encouraged to continue acquiring new clients and supporting existing ones to ensure sustained engagement and stable income.  Backend monitoring: Agents can monitor client performance and commission data in real-time through the platform’s backend system.",
      agency_summary:
        "Example process flow:  Agent registration and commission agreement → Client recruitment and account binding → Client activity on the platform → Win/loss statistics and commission calculation → Commission payout to agent account.  This process ensures the agent’s earnings are directly tied to client performance, incentivizing proactive promotion and ongoing engagement.",

      //MobileCredit
      reminder:
        "Friendly Reminder: Your balance will be automatically transferred to the gaming platform currently in use.",
      total_balance: "Total Balance",
      total_game_balance: "Total Game Balance",
      one_clk_transfer: "One-Click Transfer",
      transfer_integer: "Transfer integer balance back to the platform",
      friendly_warning:
        "Do you want to transfer all integer balances back to the platform?",
      update_balance: "Update All Balances",
      indicates: "Indicates the most recent balance flow to the platform.",

      //MobileMessage
      leave: "Leave Us a Message",
      srry_mss:
        "Hello, we are sorry that we are temporarily unable to provide you with service. If you need help, please leave a message, and we will contact you as soon as possible to resolve your issue.",

      pls_enter: "Please enter",
      mss_content: "Message Content",
      upload_img: "Upload Image",
      supp_img_type:
        "· Supports jpg, png, gif, bmp formats. You can upload up to 5 images, with a maximum size of 5MB per image.",

      //MobileMessageSuccess
      mss_success: "Message Sent Successfully",
      will_contact: "We will contact you as soon as possible",
      leave_mss: "Leave Another Message",

      //MobilePartnership
      ptnship_plan: "Partnership Plan",
      enter_clk: "Click to enter online Plan",
      plan: "Plan",
      enter_contact: "Please enter contact information",
      enter_reason_app: "Please enter the reason for application",
      contact_info: "Contact Information",
      app_reason: "Application Reason",
      apply: "Apply to Join",

      //MobileTransfer
      one_clk_rec: "One-Click Recovery",
      game_wallet: "Game Wallet",
      more: "More",
      hide: "Hide",
      auto_transfer: "Auto Transfer",
      not_supp_wallet:
        "Wallets within the venue do not support mutual transfers",
      max_amount: "Maximum Amount",
      transfer_now: "Transfer Now",
      need_help: "If you need help,",
      pls_contact: "please contact customer service",

      // patternLockSetting
      confirm_ur_pass: "Confirm Your Password",
      on: "on",
      off: "off",
      ges_lock_on_off: "GEsture Lock On/Off",
      set_ges_lock: "Set Your Gesture Lock",
      Forg_ges_pass: "Forgot Gesture Password",

      //validBetAmount
      valid_bet_amount: "Valid Bet Amount",
      payout: "Payout",
      game_lobby: "Game Lobby",
      no_data: "No Data",

      //DragImage
      user_signin: "User Sign-In",
      lucky_draw: "Lucky Draw",

      //Activity
      ur_reward: "Your Rewards",
      await_reward: "Amazing rewards await you",
      under_review: "Under Review",
      approved: "Approved",
      signin_reward: "Sign-In reward",
      task: "Tasks",
      activ: "activities",
      view: "View",

      //AddBAnkPopUp
      convert: "Convert to RMB",
      reference_rate: "Reference Rate",

      //welcome
      enter_web: "Enter Website",
      download_app: "Download App",
      exclu_browser: "Exclusive Browser",
      online_supp: "Online Support",
      provider: "Game Provider",
      selec: "Select",
      ges_login: "Sign-in",
      username_pass: "Username & Password Login",
      wel_hualong_entertain: "Welcome to Hualong Entertainment",
      inv_code: "Invitation Code",
      go_to_official_web: "Go to the official website",
      blind_box: "Blind Box",
      industryNativeApp: "Industry-leading Native App",
      signature:
        "High odds, diverse gameplay, fast withdrawals, and the highest security.",
      hualong_intro:
        "Hualong Group is the world's largest publicly listed online gambling company. It is licensed by the Isle of Man government and regulated by the Isle of Man Gambling Supervision Commission under the Online Gambling Act 2001 (as amended on December 21, 2015). The group has over 30 million customers worldwide, with a total workforce of more than 3,000 employees. The establishment of Hualong Group is based on a comprehensive assessment of the current gambling market, with a strong focus on customer perspectives. The group is dedicated to providing users with the latest and best services and gaming experiences. By incorporating advanced ideas and concepts into the customer experience, Hualong Group aims to break the fixed thinking in the gambling industry and is committed to continuous innovation and improvement.",
      fish_game: "Fish Shooting Game",
      latest: "Latest",
      select_end_time: "Please select an end time.",
      gender: "Gender",
      id_card_province: "Province on ID card",
      id_card_city: "ID card city",
      ph_no_area_code: "Phone number area code",
      totalValidBetAmount: "Total Valid Bet Amount",
      win_lose: "Total Win/Loss Amount",

      //dash
      mobileOperator: "Mobile Network Operator",
      telecommu_operator: "Telecommunications Operator",
      mobileCarrier: "Mobile Carrier",
      promote_short: "Promote Short URLs",
      bet_status: "Betting Status",
      refunded: "Refunded",
      not_refunded: "Not Refunded",

      // slotbackup
      previous: "Previous",
      next: "Next",
      postedBy: "Posted by",
      enterGameName: "Please enter the game name",
      eventTime: "Event Time",
      from: "from",
      check_in: "Check-in",

      //creditweb
      game_balance: "Game Balance",
      mostRecent: "For the most recent balance flow to the platform.",

      redrawPassword: "Redraw Password",
      skip: "Skip",

      // MobileHotPopup
      confirmYourOldGesturePassword: "Confirm Your Old Gesture Password",
      pleaseSetAGesturePassword: "Please Set A Gesture Password",
      youHaveNotSetaGesturePassword: " You Have Not Set A Gesture Password",
      confirmYourGesturePassword: "Confirm your gesture password",
      changeYourGesturePassword: "You can now change your gesture password",
      incorrectGesturePassword: "Incorrect gesture password, please try again",
      firstPasswordConfirm:
        "This is your first time setting a gesture password, please confirm it again",
      passwordDoNotMatch: "The two passwords do not match, please re-enter",
      enterOfficalWebsite: "Please enter the official website",
      checking: "Checking",
      enterNow: "Enter Now",
      promotionServiceHall: "Promotion Service Hall",
      mysteryBox: "Mystery Box",
      onlineCustomerService: "Online Customer Service",
      copyRight: "COPYRIGHT © HUALONG GROUP CO., LTD.",
      freeRegistration: "Free Registration",
      hualongBrowser: "Hualong Browser",
      hualongEntertainment: "Welcome to Hualong Entertainment",
      mostApp: "The most top-tier app, within Your Fingertips",
      exclusiveBrowser: "Exclusive Browser",
      upgrateAndMaintain:
        "The platform is currently undergoing an upgrade and maintenance.",
      comeBackAndCheck: "Please come back and check again later.",
      bonusAmount: "Bonus Amount",
      bomusEvery6th: "Get a Bonus on Every 6th",
      claimedAmount: "Amounts less than 1 yuan cannot be claimed.",
      requestWaitingTime:
        "Too many requests. Please wait 3 seconds before trying again.",
      startingDate: "Starting from 2024/02/10",
      millionWin: "Strike It Rich with a Lucky Streak – Win Millions!",
      grabNow: "Grab Now",
      getReward: "Get Rewards",
      event: "Event",
      details: "Details",
      totalTopUp: "Total Recharge Amount",
      cumulativeRecharge: "Cumulative Recharge",
      nonCumulativeRecharge: "Non-Cumulative Recharge",
      totalWithdrawalAmount: "Total Withdrawal Amount",
      totalRebateAmount: "Total Rebate Amount",
      totalAmountGiftedfromPromotions: "Total Amount Gifted from Promotions",
      vipRechargeRewards: "VIP Recharge Rewards",
      vipJournalAmount: "VIP Journal Amount",
      vipJournalWeekAmount: "VIP Journal Weekly Amount",
      vipJournalMonthAmount: "VIP Journal Monthly Amount",
      recommendRewardAmount: "Recommended Reward Amount",
      signatureRewardAmount: "Signature Reward Amount",
      promotionalGiveaways: "Promotional Giveaways",
      vip_recharge_amount_direct_member: "VIP Recharge Amount (Direct Member)",
      vip_journal_amount_direct_member: "VIP Journal Amount (Direct Member)",
      vip_journal_week_amount_direct_member:
        "VIP Journal Weekly Amount (Direct Member)",
      vip_journal_month_amount_direct_member:
        "VIP Journal Monthly Amount (Direct Member)",
      recommend_reward_amount_direct_member:
        "Recommended Reward Amount (Direct Member)",
      signature_reward_amount_direct_member:
        "Signature Reward Amount (Direct Member)",
      noUsername: "Please enter a username",
      back: "Back",
      total_recharged_amount_team: "Total Recharge Amount (Team)",
      cumulative_recharged_amount_team: "Cumulative Recharge Amount (Team)",
      non_cumulative_recharged_amount_team:
        "Non-Cumulative Recharge Amount (Team)",
      total_withdrawn_amount_team: "Total Withdrawn Amount (Team)",
      total_rebated_amount_team: "Total Rebated Amount (Team)",
      activity_amount_team: "Activity Amount (Team)",
      vip_recharge_amount_team: "VIP Recharge Amount (Team)",
      vip_journal_amount_team: "VIP Journal Amount (Team)",
      vip_journal_week_amount_team: "VIP Journal Weekly Amount (Team)",
      vip_journal_month_amount_team: "VIP Journal Monthly Amount (Team)",
      recommend_reward_amount_team: "Recommended Reward Amount (Team)",
      signature_reward_amount_team: "Signature Reward Amount (Team)",
      justBrowsing: "Just Browsing",
      fieldMarked: "Fields marked with * are required.",
      withdrawPasswordRequired:
        "The withdrawal password is required as a verification for withdrawal amounts. Please ensure all information is filled in accurately.",
      viaEmail:
        "If there are other promotions, we will notify you via email. Please provide a valid and complete email address.",
      loginRegister: "Login / Register",
      failedImage: "Image CAPTCHA Failed Multiple Times.",
      getVerificationCode: "Get Verification Code",
      usernameEmpty: "Username cannot be empty",
      passwordEmpty: "Password cannot be empty",
      confirmPasswordEmpty: "Confirm password cannot be empty",
      realnameEmpty: "Real name cannot be empty",
      verificationCodeRequired: "Verification code is required",
      confirmPaymentPasswordEmpty: "Confirm Payment Password cannot be empty",
      agreeTermsConditions: "Please agree to the terms and conditions",
      compareStardateEnddate:
        "The start date must be earlier than or equal to the end date.",
      yourReward: "Your Reward",
      valueReward: "Valuable Rewards for You",
      agentName: "Agent Name",
      agentPassword: "Agent Password",
      phoneNumberEmpty: "Phone number cannot be empty",
      match: "Match",
      notMatched: "Not Matched",
      verificationCodeNotMatch: "Verification code does not match",
      accountingAgentcy: "Accounting Agency",
      file: "File Upload",
      selectStartTime: "Please Select Start Time",
      selectEndTime: "Please Select End Time",
      IDCardProvince: "ID Card Province",
      IDCardCity: "ID Card City",
      number_province: "Number of Provinces",
      number_city: "Number of Cities",
      carrier: "Mobile Carrier",
      numberOperator: "Number Operator",
      city_name: "City Name",
      promotionalShortURL: "Promotional Short URL",
      bettingStatus: "Betting Status",
      totalEffectiveBetAmount: "Total Effective Bet Amount",
      dividend: "Dividend",
      totalWinLossAmount: "Total Win/Loss Amount",
      withdrawalCount: "Withdrawal Count",
      totalSubordinateWinLossAmount: "Total Subordinate Win/Loss Amount",
      startGame: "Start Game",
      takeAGamble: "Take a gamble — turn your pistol into a supermodel!",
      recommendated: "Recommendated",
      luckyMoney: "Lucky Money / Turnaround Bonus",
      // *******
      // MobileActivityMemberCard
      activity_time: "Activity Time:",
      start: "Start",
      domesticDownload: "Inside China? Choose 'Domestic Download'.",
      overseasDownload: "Outside China? Choose 'Overseas Download'.",

      unclaimed: "unclaim",
      transaction1: "Txn",
      totaltext: "total",
      claimAll: "CollectAll",

      backupCustomerService: "Backup Customer Service",
      hualongLogin: "Hualong login",
      gestureLogin: "gesture login",
      usernamePasswordLogin: "username password login",
      disbursementRecords: "Disbursement Records",
      pgSlotLuckyBetBonus1028: "PG Slot Lucky Bonus (1028)",
      slotNo5RescueBonus1028: " Slot No.5 – Bonus (1028)",
      transactionsDisbursed7: "7-Day Disbursed Transactions",
      transactionsDisbursed78: "78-Day Disbursed Transactions",
      rewards: "Rewards",
      coding1: "Coding",

      // account
      account_address: "account address",

      //MobileWithdrawpassword
      withdraw_pw: "Withdraw password",
      notice:
        "For the safety of funds, you need to set a withdrawal password first!",
      set_withdraw_pw: "Set withdrawal password",
      confirm_withdraw_pw: "Confirm withdrawal password",
      note: "Note: The withdrawal password protects your funds. It is very important and only you should know it to avoid financial loss.",

      //MobileMissionPopup
      task_app: "Task application",
      task_progr: "Task progress",
      acti_time: "Activity time:",
      raise: "raise",
      applyforbonus: "Apply for bonus",
      pratic: "Participating member accounts (,) separated",
      submit_now: "Submit now",
      no_info: "No information yet",

      //mobilecrab
      logInRedPocket: "Login Surprise Red Packet Rain",
      drawRedPocket: "Draw a Red Packet",

      // API reponse
      mobileHome: "Home",
      moibleActivity: "Activity",
      mine: "MINE",
      discount: "DISCOUNT",
      customerService: "Cust.Service",
      mobileRecharge: "Deposit",
      mobileWithdrawl: "withdrawal",
      mobileWallet: "Wallet",
      mobileCredit: "TransferCredit",
      mobileRebate: "Welfare",
      video: "Video",

      login: "Login",
      register: "Register",

      // **************************
      // My Footer
      Finance: "Finance",
      order: "ORDER",
      headGame: "GAMES",
      headSport: "SPORTS",
      headPlaza: "Plaza",
      headVideo: "VIDEO",
      Finance: "Finance",

      fullscreen: "Full Screen",
      // MobileAccountingAgent
      own_agency: "Own Agency",
      team_agency: "Team Agency",
      direct_agency: "Direct Agency",
      datefrom: "Start Date",
      dateto: "End Date",
    
  }
  const myan= {
   
    //   new_text: "အသစ်",
    //   direct_agency: "တိုက်ရိုက်အေဂျင်စီ",
    //   createdAt: "ဖြစ်ပျက်ချိန်",
    //   transferCard: "KBZ အွန်လိုင်းဘဏ်စနစ်ဖြင့် ငွေလွှဲခြင်း",
    //   addTransferCard: "KBZ အွန်လိုင်းဘဏ်စနစ်ဖြင့် ငွေလွှဲခြင်းကို ထည့်ပါ။",
    //   withdrwalPassword: "ထုတ်ယူမှုပ passwords",
    //   huiwang: "Huiwang အကောင့်",
    //   addHuiwang: "Huiwang အကောင့်ထည့်ပါ",
      Name: "အမည်",
      selectHuiwang: "Huiwang အကောင့်ကို ရွေးချယ်ပါ",
      fillHuiwangAcc: "Huiwang အကောင့်ကို ဖြည့်ပါ",
      takeScreenShot:
        "လွှဲပြောင်းမှုအောင်မြင်ပြီးနောက်၊ ဖန်သားပြင်ဓာတ်ပုံရိုက်ပြီး ဝန်ဆောင်မှုကို ဆက်သွယ်ပါ။",
      fillInfoNormally:
        "ငွေပေးသူအချက်အလက်ကို အကောင့်ထဲသို ပုံမှန်အတိုင်း ထည့်သွင်းနိုင်သည်။",
      fillCorrect: "ကျေးဇူးပြု၍ မှန်မှန်ကန်ကန်ဖြည့်ပါ။",
      rechargeAmount: "ထည့်သွင်းမည့်ပမာဏ",
      selectedRechargeMethod: "အားပြန်သွင်းနည်းကို ရွေးပါ။",
      enterRealName: "ကျေးဇူးပြု၍ ငွေပေးသူ၏အမည်ရင်းကို ထည့်ပါ။",
      huiwangAccount: "Huiwang အကောင့်",
      endLevel: "အဆင့်မြှင့်ရန်",
      kyatAmount: "ကျပ်ငွေပမာဏ",
      allowEngOnly: "အသုံးပြုသူအမည်မှားနေသည်၊ သေချာစစ်ဆေးပါ။",
      listAmount: "ပမာဏ",
      EnterRMBamount: "ကျေးဇူးပြု၍ ပမာဏကို RMB (ယွမ်) ဖြင့် ထည့်ပါ",
      initialLevel: "ကနဦးအဆင့်",
      state: "ပြည်နယ်",
      creationTime: "ဖန်တီးချိန်",
      headGame: "ဂိမ်းများ",
      headSport: "အားကစား",
      headVideo: "ဗီဒီယို",

      // dialog
      ok: "OK",

      // header
      progress: "တိုးတက်မှုမေးခွန်း",
      appDownload: "APPဒေါင်းလုပ်လုပ်ပါ",
      appUpdateDownload: "အက်ပ်အပ်ဒိတ် လိုအပ်သည်။",
      latestVersion:
        "နောက်ဆုံးထွက်ဗားရှင်းကို ရနိုင်ပါပြီ။ ပိုမိုကောင်းမွန်သောအတွေ့အကြုံအတွက် သင့်အက်ပ်ကို အပ်ဒိတ်လုပ်ပါ။",
      updateNow: "ယခု အပ်ဒိတ်လုပ်ပါ။",
      logoutConfirm: "သင့်အကောင့်မှ ထွက်လိုသည်မှာ သေချာပါသလား။",
      Exit: "ထွက်သည်",
      exit: "ထွက်လိုသည်မှာ သေချာပါသလား။",
      Wait: "စောင့်သည်",
      ConfirmDelete: "သင့်အကောင့်ကို ဖွင့်လိုသည်မှာ သေချာပါသလား။",
      DisableDelete: "သင့်အကောင့်ကို ပိတ်လိုသည်မှာ သေချာပါသလား။",
      deleteyes: "လုပ်ပါမည်",
      deleteno: "မလုပ်ပါ",
      home: "ပင်မစာမျက်နှာ",
      casino:
        "ကမ္ဘာ့ထိပ်တန်း အီလက်ထရွန်နစ်ဂိမ်းပလက်ဖောင်းများကို စုစည်းပြီး ထောင်ပေါင်းများစွာသော အထိုင်စက်ဂိမ်းများသည် သင့်အား ကစားရန် စောင့်ဆိုင်းနေပါသည်။ သန်းပေါင်းများစွာသော jackpot သည် သင့်လက်လှမ်းမီရာအတွင်းတွင်ရှိပြီး သင့်လက်ချောင်းထိပ်တွင် ၎င်းကိုအနိုင်ရရန်စောင့်ဆိုင်းနေပါသည်။！",
      jackpot: "သန်းပေါင်းများစွာသော စုဆောင်းခြင်း",
      prize: "ကြီးကျယ်ခမ်းနားသောဆုကြီးဖြစ်တော့မည်",
      gameContent: `မိုဘိုင်းလောင်းကစားပလပ်ဖောင်းသည် ကွန်ရက်တစ်ခုလုံးရှိ ကစားသမားများအတွက် ဖွင့်လှစ်ထားပြီး အီလက်ထရွန်နစ်ဂိမ်းများ၊ အထိုင်စက်များ၊ ဘေကာရက်နှင့် ထီဂိမ်း 10,000 နီးပါးကို ပံ့ပိုးပေးထားသည်။
            အားကစားလောင်းကစား၊ အွန်လိုင်းငွေသွင်းခြင်းနှင့် အွန်လိုင်းငွေထုတ်ခြင်း၊ ကလစ်တစ်ချက်နှိပ်ခြင်း လုပ်ဆောင်ချက်၊
            သုံးဖက်မြင်ရုပ်ပုံများနှင့် ပေါင်းစပ်ထားသော တကယ့်မြင်ကွင်းများကို ဖန်တီးရန် 3D အချိန်နှင့်တပြေးညီ တွက်ချက်မှုကို အသုံးပြုသည့် စနစ်ပေါင်းစုံ ဖျော်ဖြေရေးပလပ်ဖောင်းတစ်ခု။
            အနှောက်အယှက်ကင်းသော ဖျော်ဖြေရေးသဘောတရားကို အချိန်မရွေး၊ နေရာမရွေး ခံစားရစေရန် အကောင့်ထပ်တူပြုခြင်းနှင့် ဒေတာထုတ်လွှင့်ခြင်းတိုကို ပေါင်းစပ်ပါ။ လွယ်ကူစွာ၊ ဖျော်ဖြေရေးသည် သင့်လက်ချောင်းထိပ်တွင်ရှိပြီး ကြွယ်ဝမှုသည် သင့်လက်ချောင်းထိပ်တွင် ရှိနေပါသည်။。`,
      afterlogin:
        "အကောင့်ဝင်ပြီးနောက် အက်ပ်ကိုဒေါင်းလုဒ်လုပ်ရန် APPကုဒ်ကို စကင်န်ဖတ်ပါ",
      device: "မိုဘိုင်းကိရိယာအားလုံး",
      notNeedDownload: "မိုဘိုင်းလ်ဖုန်းအတွက် ဒေါင်းလုဒ်လုပ်ရန် မလိုအပ်ပါ",
      enterUrl: "ဝင်ရောက်ရန် ဘရောက်ဆာထဲသို့ URLကို ထည့်ပါ",
      announcement: "ကြော်ငြာချက်",
      marquee_notice: "ကြော်ငြာချက်",
      titlehome: "Home",
      homeLogin: "လော့ဂ်အင်",
      registerBtn: "မှတ်ပုံတင်ပါ",
      seeMore: "နောက်ထပ်စစ်ဆေးရန်...",
      popular: "ထိပ်တန်းဂိမ်းများ",

      // Footer
      Finance: "Finance",
      order: "ORDER",
      center: "အဖွဲ့ဝင်စင်တာ",
      promo: "ပရိုမိုးရှင်းများ",
      promotion: "လျော့ဈေး",
      promotionHall: "ပရိုမိုးရှင်းခန်းမ",
      alternate: "အစားထိုးURL",
      vipClub: "VIPဟွန်ဂင်းဟွုန်",
      newHelping: "ကူညိရေးဌာန",
      customerCenter: "ဧည့်ဝန်ဆောင်မှု",
      regulatory: "စည်းကမ်းထိန်းသိမ်းရေးအာဏာပိုင်",
      authorized: "မကာအိုအစိုးရမှ ခွင့်ပြုချက်",
      marquee:
        "ကစားသမားအများစုကို ပိုမိုကောင်းမွန်သောအတွေ့အကြုံကိုပေးစွမ်းရန်အတွက် အီလက်ထရွန်းနစ်ဂိမ်းများ၊ တိုက်ရိုက်ဗီဒီယို၊ စစ်တုရင်၊ ကတ်များ၊ ငါးဖမ်းခြင်းနှင့် e-sports အမျိုးအစားအားလုံးကို ပံ့ပိုးပေးရန် ဤပလက်ဖောင်းကို ဂရုတစိုက်တည်ဆောက်ထားပါသည်။ 1. ☆☆☆ ပြန်လည်အားသွင်းရန် အကြံပြုချက်☆ ☆☆ ငွေပြန်သွင်းခြင်းအတွက် ပထမရွေးချယ်မှုမှာ [USDT] လွှပြောင်းခြင်း- ချစ်လှစွာသောအဖွဲဝင်များ မင်္ဂလာပါ၊ မကြာသေးမီက ပြင်ပမှငွေဖြည့်သွင်းမှုများ၏ မတည်ငြိမ်မှုကြောင့်၊ [USDT] လွှပြောင်းခြင်းနှင့် ပြန်လည်အားသွင်းခြင်း၊ ပမာဏအများအပြားကို ပြန်လည်သုံးသပ်ခြင်းမပြုဘဲ စက္ကန့်ပိုင်းအတွင်း အပ်နှံပါမည်။ ကျေးဇူးပြု၍ စပေါ်ငွေလိပ်စာဖြည့်ပါ။ မှန်ကန်စွာ၊ ငွေပေးချေမှုကို လျှော့ပေးပါမည်။ စပေါ်ငွေကို စက္ကန့်ပိုင်းအတွင်း အပ်နှံပါမည်။",

      // about page
      problem1: "1.အဖွဲ့ရဲ့ အွန်လိုင်းဖျော်ဖြေရေး ခွန်အားကဘယ်လော？",
      problem1detail:
        "မင်္ဂလာပါ၊，ကျေးဇူးပြု၍ “ကျွန်ုပ်တို့အကြောင်း”ပင်မစာမျက်နှာကို ကြည့်ပါ",
      problem2: "2.သင့်ကုမ္ပဏီတွင် ဂိမ်းကစားခြင်းသည် ဘေးကင်းပါသလား",
      problem2detailone:
        "မင်္ဂလာပါ၊ ကျွန်ုပ်တို၏ကုမ္ပဏီစနစ်သည် လုံးဝလုံခြုံပါသည်။ ကျွန်ုပ်တိုသည် ကျွန်ုပ်တို၏ဖောက်သည်များ၏ ကိုယ်ရေးကိုယ်တာအချက်အလက်များကို မည်သည့်စီးပွားရေးအဖွဲအစည်းကိုမျှ ထုတ်ဖော်မည်မဟုတ်ပါ။ ထိုအပြင်၊ ကျွန်ုပ်တိုသည် ငွေပေးငွေယူနှင့် အကြွေးဝယ်ကတ်ဖြင့် ငွေလွှသည့်ဘဏ်များလည်း လိုအပ်ပါသည်။",
      problem2detailtwo:
        "အေးဂျင့်များနှင့် အခြားဖောက်သည်များ၏ အချက်အလက်များကို လျှိဝှက်ထားရန် တင်းကြပ်စွာ သိမ်းဆည်းထားသည်။ အပ်ငွေအားလုံးကို ကုန်သွယ်မှုအကောင့်များအဖြစ် သတ်မှတ်မည်ဖြစ်ပြီး အခြားပါတီများသို လွှပြောင်းပေးမည်မဟုတ်ပါ။",
      problem3: "3.အွန်လိုင်းလောင်းကစားတရားဝင်လား？",
      problem3detailone:
        "မင်္ဂလာပါ၊ ကျွန်ုပ်တိုသည် ဖိလစ်ပိုင်တွင် တရားဝင်မှတ်ပုံတင်ထားသော ဂိမ်းကုမ္ပဏီတစ်ခုဖြစ်သည်။ ဂိမ်းလုပ်ငန်းလည်ပတ်မှုအားလုံးသည် ဖိလစ်ပိုင်အစိုးရသဘောတူညီချက်များကို လိုက်နာပြီး အခြားဒေသများတွင် တရားစီရင်ပိုင်ခွင့်မရှိပါ။ ကျေးဇူးပြု၍ သင့်ကိုယ်ပိုင်အန္တရာယ်ကို လိုက်နာပါ။",
      problem3detailtwo:
        "အလောင်းအစားချရန် ဆုံးဖြတ်ရာတွင် ဒေသဆိုင်ရာဥပဒေများကို ကျေးဇူးပြု၍ ထည့်သွင်းစဉ်းစားပါ။ ကုမ္ပဏီသည် မည်သူတစ်ဦးတစ်ယောက်၏ ဒေသန္တရဥပဒေများကို ချိုးဖောက်ခြင်းကြောင့် ဖြစ်ပေါ်လာသည့် မည်သည့်တာဝန်ယူမှုကိုမျှ လက်ခံမည်မဟုတ်ပါ။",
      problem4:
        "4 အဖွဲ့အွန်လိုင်းဖျော်ဖြေရေးတွင်လောင်းကြေးအတွက် အသက်ကန့်သတ်ချက်ရှိပါသလား？",
      problem4detail:
        "မင်္ဂလာပါ၊，ဟုတ်ပါတယ်，လောင်းကစားအတွက်တရားဝင်အသက်က18နှစ်နဲ့အထက်ဖြစ်ရမယ်。",
      problem5:
        "5.အကောင့်ဖွင့်သည့်အခါတွင် သင့်အမည်ရင်းကိုဖြည့်ရန် လိုအပ်ပါသလား？",
      problem6detail:
        "မင်္ဂလာပါ，သင်၏အထောက်အထားကိုအတည်ပြုရန်နှင့် သင့်Passwordကိုပြောင်းလဲရန်အတွက် လျှောက်ထားရန် 7*24 နာရီအွန်လိုင်းဖောက်သည်ဝန်ဆောင်မှုကို ဆက်သွယ်ပါ။。",
      privacyPolicy: "ကိုယ်ရေးအချက်အလက် လျှို့ဝှက်မှု",

      //Disclaimer
      disclaimer: "သတိပြုရန်",
      disclaimer_1:
        "၁။ နေ့စဉ်ငွေထုတ်ယူမှုအများဆုံးမှာ ၁,၀၀၀,၀၀၀ ကျပ် ဖြစ်ပါတယ်၊ တရားဝင်လောင်းကစားပမာဏ ပြည့်မှီသောအခါတွင် ဝန်ဆောင်ခကို လုံးဝအခမဲ့ ဖြစ်ပါတယ်",
      disclaimer_2:
        "၂။ ငွေထုတ်လုပ်ငန်းမှာ ပုံမှန်အားဖြင့်  ၃ မိနစ်မှ ၅ မိနစ် ကြာပါသည်။ သို့သော် ဘဏ်စနစ် ပြုပြင်ထိန်းသိမ်းနေမှု၊ ငွေစာရင်းရှင်းတမ်းလုပ်ငန်း သို့မဟုတ် အရေးကြီးသော အခြေအနေများကြောင့် ပိုနောက်ကျခြင်း သို့မဟုတ် ယာယီထုတ်ယူလို့မရနိုင်ပါသည်။",
      disclaimer_3:
        "၃။ အွန်လိုင်းလောင်းကစားအားလုံးအတွက်၊ ကြော်ငြာမလျှောက်ထားပါက ငွေသွင်းပမာဏ ၁x အထိ တရားဝင်လည်ပတ်မှုများ ပြီးမြောက်စွာ ပြုလုပ်ရမည်ဖြစ်သည်။ ပရိုမိုးရှင်းအသုံးပြုပါက သက်ဆိုင်ရာ လောင်းကြေးပြည့်မီမှုလိုအပ်ချက်များကို လေ့လာပါ။",
      disclaimer_4:
        "၄။ ကုမ္ပဏီသည် အသုံးပြုသူအကောင့်များအား အချိန်မရွေး ပြန်လည်စစ်ဆေးခွင့်ရှိပါသည်။",
      disclaimer_5:
        "၅။ အမျိုးမျိုးသောဂိမ်းများနှင့်အက်ဖ်အဲလ်ဖြစ်သွားသည့် သို့မဟုတ် မလက်ခံရသေးသည့်၊ ပယ်ဖျက်သွားသည့် လောင်းကြေးများသည် တရားဝင်လောင်းကြေးအတွက်တွက်ချက်ခြင်းတွင် ပါဝင်မည်မဟုတ်ပါ။အားကစားလောင်းကစားအမျိုးအစားများအတွက်၊ အချိုးအစားမြင့်သော လောင်းကြေးများတွင် တာဝန်ခံထားသောလောင်းကြေးပမာဏအား တရားဝင်လောင်းကြေးအဖြစ်တွက်ချက်ပြီး၊ အချိုးအစားနိမ့်သော လောင်းကြေးများတွင် အနိုင်/အရှုံးပမာဏကိုသာ တရားဝင်လောင်းကြေးအဖြစ်တွက်ချက်ပါသည်။အချိုးအစားမြင့်သောထုတ်ကုန်များတွင် Parlays၊ Correct Score၊ Total Goals၊ Half/Full Time၊ Double Chance၊ Championship စသည့်အမျိုးအစားများ ပါဝင်ပါသည်။",
      disclaimer_end:
        "မေးလို့တဲ့အကြောင်းအရာများရှိပါက ၂၄ နာရီ ဝန်ဆောင်မှုဖုန်းလိုင်း (သို့) အွန်လိုင်း customer service ကို ဆက်သွယ်နိုင်ပါသည်။",

      privacy_rule_1:
        "၁။ AK Group သည် ၎င်း၏ အဖွဲ့ဝင်များ၏ သီးသန့်လျှို့ဝှက်ခွင့်ကို အလွန်အရေးကြီးစွာ တန်ဖိုးထားပြီး လေးစားပါသည်။ သင့်ကိုယ်ရေးအချက်အလက်နှင့် ဒေတာများ၏ လုံခြုံရေးနှင့် လျှို့ဝှက်မှုကို အထူးဂရုပြုလျက်ရှိသည်။ ထို့ကြောင့် ဖောက်သည်များအနေဖြင့် ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို စိတ်အေးအေးချမ်းချမ်း အသုံးပြုနိုင်ပါသည်။ ဤအယူအဆသည် ကျွန်ုပ်တို့၏ သက်တမ်းရှည် မူဝါဒ၏ အခြေခံကျသောအချက်တစ်ခုဖြစ်ပါသည်။",
      privacy_rule_2:
        "၂။ AK Group သည် တရားရုံးအမိန့်မရှိပါက သင့်ကိုယ်ရေးအချက်အလက်များကို တတိယပုဂ္ဂိုလ်များထံ မမျှဝေပါ။ သို့သော် လိုအပ်ပါက ငွေပေးချေမှုဆိုင်ရာ ပလက်ဖောင်းများနှင့် ဘဏ်၊ အာမခံလုပ်ငန်းများကဲ့သို့သော ဌာနများထံသို့ အချက်အလက်ပေးပို့ရန် အခွင့်အာဏာရှိပါသည်။",
      privacy_rule_3:
        "၃။ အဖွဲ့ဝင်များပေးသည့် ကိုယ်ရေးအချက်အလက်များကို 128-bit SSL စနစ်ဖြင့် ကုဒ်ဖြင့်လုံခြုံစွာ ပေးပို့ပြီး အများပြည်သူ မဝင်ရောက်နိုင်သော လျှို့ဝှက်ထားသည့် ပတ်ဝန်းကျင်တွင် သိမ်းဆည်းထားသည်။ အတွင်းဝန်ထမ်းများမှသာ ဝင်ရောက်နိုင်ပြီး ထိန်းချုပ်မှုလည်း တင်းကျပ်စွာ ပြုလုပ်ထားသည်။",
      protect_data:
        "ဖောက်သည်များ၏ ကိုယ်ရေးအချက်အလက်များအား ကာကွယ်ရန် ကျွန်ုပ်တို့၏ မူဝါဒများမှာ အောက်ပါအတိုင်းဖြစ်သည်။",
      protect_rule_intro:
        "ကျွန်ုပ်တို့၏ ဝဘ်ဆိုဒ်ဝန်ဆောင်မှုများကို AK Group မှ စီမံသည်။",
      protect_rules:
        "ဖောက်သည်အတွေ့အကြုံကောင်းများ ရရှိစေရန်၊ ကိုယ်ရေးအချက်အလက်များကို တင်းကျပ်စွာ စီမံခန့်ခွဲပါသည်။ အချို့သောအခါတွင် တိုးတက်သော ဝန်ဆောင်မှုများပေးနိုင်ရန် သင့်ကိုယ်ရေးအချက်အလက်တောင်းနိုင်ပါသည်။ ဥပမာအားဖြင့် - နာမည်၊ လိပ်စာ၊ အီးမေးလ်၊ အဖွဲ့ဝင် ID၊ ဖုန်းနံပါတ်၊ မွေးသက္ကရာဇ်၊ ငွေပေးချေမှုအချက်အလက်များ စသည်ဖြင့်။ ထိုအချက်အလက်များကို ဤမူဝါဒနှင့် သက်ဆိုင်ရာဥပဒေများအရသာ စနစ်တကျ အသုံးပြုပါမည်။ ထို့အပြင် ဝဘ်ဆိုဒ်တွင် သင်ဘယ်စာမျက်နှာကို သွားကြည့်သည်၊ ဘယ်ကဝင်လာသည် စသည့် လှုပ်ရှားမှုအချက်အလက်များကို တိုးတက်မှုအတွက် အသုံးပြုနိုင်သည်။ ထိုအချက်အလက်များမှာ သင်္ကေတဖျောက်ထားပြီး တစ်ဦးချင်းဖော်ထုတ်၍ မရနိုင်ပါ။",
      data_confident: "အချက်အလက်လျှို့ဝှက်မှု",
      data_confident_content:
        "AK Group သည် မည်သည့် ကိုယ်ရေးအချက်အလက်မဆို လုံခြုံစွာ ထိန်းသိမ်းရန် ကြိုးစားပါသည်။ ဤမူဝါဒတွင် ဖော်ပြထားခြင်းမရှိပါက တတိယပုဂ္ဂိုလ်ထံ မမျှဝေပါ။ ဝန်ထမ်းအားလုံးသည် ဤမူဝါဒကို လိုက်နာရမည်ဖြစ်ပြီး၊ အလုပ်ထွက်ပြီးနောက်တွင်ပါ လျှို့ဝှက်မှုတာဝန်ရှိသည်။ သင်လည်း မိမိ၏ login အချက်အလက်များကို ထိန်းသိမ်းရမည် ဖြစ်ပြီး၊ စကားဝှက်ကို အခြားသူနှင့် မမျှဝေသင့်ပါ။",
      service_statement: "ဝန်ဆောင်မှု အသိပေးချက်",
      service_statement_content:
        "ဝန်ဆောင်မှုအရည်အသွေးမြှင့်တင်ခြင်း၊ လိမ်လည်မှုကာကွယ်ခြင်းနှင့် ဥပဒေရေးရာလိုက်နာမှုအတွက် ဖောက်သည်ဆက်သွယ်မှုမှတ်တမ်းများ (ဥပမာ - ဖုန်းခေါ်ဆိုမှုများ၊ အီးမေးလ်များ) ကို သိမ်းဆည်းပြီး စောင့်ကြည့်နိုင်ပါသည်။ ကိုယ်ရေးအချက်အလက်များကို တိုက်ရိုက် ကြော်ငြာအတွက် အသုံးမပြုစေလိုပါက သက်သေပြချက် (ဥပမာ - အကောင့် ID၊ အသုံးပြုသူအမည်၊ မှတ်ပုံတင်အချက်အလက်) ဖြင့် ရေးသားထားသော တောင်းဆိုချက်တင်ပြနိုင်ပါသည်။ AK Group တွင် အကောင့်ဖွင့်ခြင်းဖြင့် သင်သည် ဤသီးသန့်လျှို့ဝှက်မှု မူဝါဒကို သဘောတူကြောင်း ချပြသည်။ မူဝါဒအပ်ဒိတ်များကို မကြာခဏပြုလုပ်မည်ဖြစ်ပြီး၊ အသစ်ပြောင်းလဲသည့်အခါ အသုံးပြုမှု ဆက်လက်လုပ်ဆောင်ပါက သဘောတူကြောင်း ယူဆမည်။ သဘောမတူပါက ဝန်ဆောင်မှု အသုံးပြုခြင်းကို ရပ်ဆိုင်းနိုင်ပါသည်။ မူဝါဒနှင့် အထူးသတ်မှတ်ချက်ကြား ဆန့်ကျင်မှုတစ်ခုရှိပါက အထူးသတ်မှတ်ချက်ကို ဦးစားပေးအသုံးပြုပါမည်။",

      contact: "ကျွန်ုပ်တို့ကိုဆက်သွယ်ပါ",
      contactone: "一、ဖက်စပ်အစီအစဉ် ဆက်သွယ်ရန်အချက်အလက်an",
      contactonedetail: "1. ဖက်စပ်ဌာSkype",
      contacttwo: "二、ဧည့်ဝန်ဆောင်မှုအီးမေးလ် ",
      contactthree: "三、အွန်လိုင်းဧည့်ဝန်ဆောင်မှု",
      contactservice:
        "ကျွန်ုပ်တို့၏ဧည့်ဝန်ဆောင်မှုဝန်ထမ်းများသည် ဧည့်ဝန်ဆောင်မှုပေးသည့်သဘောထားကို ဆက်လက်ထိန်းသိမ်းထားပြီး အွန်လိုင်းဧည့်ဝန်ဆောင်မှုသည် သင့်အား24နာရီ တိုင်ပင်ဆွေးနွေးမှုနှင့် အကူအညီများပေးပါသည်",

      agentRegister: "အေးဂျင့်",
      parentId: "Parent Id",
      aboutus: "ကျွန်ုပ်တို့၏အကြောင်း",
      autoplay: "Auto Play",

      // transRecord
      number: "နံပါတ်စဉ်",
      time: "အချိန်",
      transaction_type: "ငွေပေး‌ငွေယူ အမျိုးအစား",
      transaction: "အပ်ငွေနှင့် ငွေထုတ်မှတ်တမ်းများ",
      currency: "ငွေကြေး",
      noData: "ဒေတာမရှိပါ",
      selectDate: "ရက်စွဲကို ရွေးပါ",
      startDate: "စတင်သည့်ရက်စွဲ",
      endDate: "ကုန်ဆုံးရက်",
      date: "ရက်စွဲ",
      timeSection: "အချိန်ရွေးချယ်မှု",
      search: "ရှာဖွေခြင်း",

      //for navbar items
      transRecord: "အပ်ငွေနှင့်ငွေထုတ်မှတ်တမ်းများ",
      rechargeRewards: "ဆုလာဘ်များ ထပ်ဖြည့်ပါ",
      rolloverRewards: "Rollover ဆုလာဘ်များ",
      betRecord: "လောင်းကစားမှတ်တမ်း",
      rebateRecord: "ငွေပြန်အမ်းမှုမှတ်တမ်း",
      accountDetail: "အကောင့်အသေးစိတ်",

      // Rebate  Details
      rebateyesterday: "မနေ့က",
      rebateweek: "ဒီတစ်ပတ်",
      rebatemonth: "ဒီလ",
      outstanding_balance: "လက်ကျန်ငွေ",
      rebate_ratio: "ပြန်အမ်းငွေအချိုး",
      last_month_balance: "လက်ကျန်ငွေကို ပြီးခဲ့သည့်လက ပြေလည်ခဲ့သည်",
      rewardRecord: "ထောက်ခံစာ ချီးမြင့်မှတ်တမ်း",
      days7: " ၇ ရက်",
      days15: "၁၅ ရက်",
      days30: "ရက် ၃၀",
      lastWeek: "ပြီးခဲ့သောအပတ်",
      last7Days: "ပြီးခဲ့သော ၇ ရက်အတွင်း ",
      rebateDetails: "ပြန်အမ်းငွေစာရင်းဇယားအသေးစိတ်",
      queryID: "မေးခွန်း ID",
      ID: "ID",
      rewardserial: "နံပါတ်စဥ်",
      cycle: "ငွေပေးချေမှုသံသရာ",
      rewardstransaction: "ငွေပေးငွေယူID",

      // bet_record
      category: "ကုန်ပစ္စည်းအမျိုးအစား",
      gameName: "ဂိမ်းနာမည်",
      gameSupplier: "ဂိမ်းရောင်းချသူ",
      winLoss: "အနိုင်/ရှုံး",
      benefit: "အကျိုးကျေးဇူးများ",
      betStatus: "လောင်းကစားအခြေနေ",
      bonus: "စုစုပေါင်းဆုကြေးငွေ",
      promotionalBonus: " ပရိုမိုးရှင်းလက်ဆောင်",
      totalLoss: "စုစုပေါင်းဆုံးရှုးမှုပမာဏ",
      totalWin: "စုစုပေါင်းအနိုင်ရပမာဏ",
      betTime: "လောင်းကစားအချိန်",
      action: "လုပ်ဆောင်မှု",

      // mine
      account: "အကောင့်",
      birthday: "မွေးနေ့",
      mail: "မေးလ်",
      joinUs: "ကျွန်ုပ်တို့နဲ့အတူပါဝင်ပါ，Day1",
      logout: "ထွက်မည်",
      myaccount: "ကျွန်ုပ်အကောင့်",
      deposit: "အွန်လိုင်းငွေသွင်း",

      // withdrawl
      withdrawl: "အွန်လိုင်းငွေထုတ်",
      support: "နည်းပညာပံ့ပိုးမှုဝန်ဆောင်မှုများ",
      personal: "ကိုယ်ပိုင်စင်တာ",
      card: "ကျွန်ုပ်ကတ်ကိုင်ဆောင်ထား",
      loginPass: "ဝင်ရောက်ရန်Password",
      forgetPass: "Passwordမေ့",

      // regitster
      registerAccount: "အကောင့်တစ်ခုမှတ်ပုံတင်ပါ",
      phone: "ဖုန်းနံပါတ်",
      limitPassword:
        "Password（အင်္ဂလိပ်လို အက္ခရာ အနည်းဆုံး 8 လုံးနှင့် နံပါတ်များ）",
      confirmPassword: "Passwordအတည်ပြုခြင်း",
      memberProfile: "အဖွဲ့ဝင်ပရိုဖိုင်",
      withdrawlPassLimit:
        "ကျေးဇူးပြု၍ ဂဏန်း6လုံး ‌‌ငွေထုတ်သည့်Passwordကို ထည့်ပါ",
      withdrawlPassConfirm: "‌ငွေထုတ်ရန် Passwordကို အတည်ပြုပါ",
      inviterId: "ဖိတ်ကြားသူid",
      verifiyCode: "အတည်ပြုရန်ကုတ်",
      confirmBox:
        "လည်ပတ်မှုကို အတည်ပြုခြင်းဖြင့် သင်သည်တရားဝင်လောင်းကစားအသက်အရွယ်နှင့် အကောင့်ဖွင့်ခြင်းဆိုင်ရာ စည်းကမ်းချက်များအားလုံးကို အဘောတူသည်ဟု ယူဆပါသည်",
      confirmBtn: "ပေးပို့အတည်ပြုပါ",
      vipPermission: "VIPခွင့်ပြုချက်များကိုကြည့်ပါ",
      addWalletAddress: "ပိုက်ဆံအိတ်လိပ်စာထည့်ပါ",
      usdtAddress: "USDTလိပ်စာ",
      selectProtocol: "USDT အမျိုးအစား",
      usdtSuccess: "USDT ငွေပေးချေမှု အောင်မြင်ပါသည်",
      disable: "ပိတ်ထားသည်",
      enable: "ဖွင့်ထားသည်",
      wallet: "ငွေထုတ်ပါ",
      withdrawlPass: "ငွေထုတ်ခြင်း Password",
      personalInfo: "ကိုယ်ပိုင်သတင်းအချက်အလက်များ",
      levelUpdate: "အပ်ဒိတ်အချိန်ကို စနစ်အရ သတ်မှတ်သည်",
      current: "လက်ရှိ",
      bankInfo: "ဘဏ်အချက်အလက်",
      cardNumber: "ကတ်နံပါတ်",
      holder: "ကိုင်ဆောင်ထားသူ",
      bankCard: "ဘဏ်ကတ်",
      addBankCard: "ဘဏ်ကတ်ထည့်ပါ",
      addUSDT: "USDTလိပ်စာထည့်ပါ",
      USDTAmountEmpty: "ငွေပမာဏသည် ဗလာမဖြစ်ရပါ။",
      minUSDTRechargeAmount: "USDT အနည်းဆုံး အပ်ငွေပမာဏ-အနည်းဆုံး ",
      maxUSDTRechargeAmount: "USDT အများဆုံးအပ်ငွေပမာဏ- အများဆုံး ",
      maxUSDT: "USDT အများဆုံး: ထုတ်ယူနိုင်မှု",
      rechargeTimeout: "ငွေသွင်းချိန် ကုန်သွားပါပြီ။",
      maxAmountError: "သင်ထုတ်ယူသော လက်ကျန်ငွေသည် မလုံလောက်ပါ။",
      chooseBank: "ဘဏ်ကို‌ရွေးပါ",
      chooseUSDT: "USDTကိုရွေးပါ",
      bankAddress: "အကောင့်ဖွင့်ဘဏ်လိပ်စာ",
      cardHolder: "ကဒ်ပြားကိုင်ဆောင်သူအမည်",
      plzenter: "ကျေးဇူးပြု၍ ဝင်ပါ",
      deleteBtn: "ဖျက်ပါ",
      oldPass: "Passwordအဟောင်း",
      newPass: "Passwordအသစ်",
      confirmNewPass: "Passwordအသစ်ကို အတည်ပြုပါ",
      enterReason: "ငြင်းပယ်ခြင်းအတွက် အကြောင်းပြချက်ကို ထည့်သွင်းပါ။",
      cancel: "မလုပ်တော့ပါ",
      confirm: "အတည်ပြုပါ",
      sure: "သေချာသည်",
      choose: "ရွေးချယ်ပါ",
      select: "ရွေးချယ်မှုတစ်ခုကို ရွေးချယ်ပါ",
      cellphone: "ဖုန်း",
      protocol: "ပိုက်ဆံအိတ် ပရိုတိုကော",
      walletAddress: "ပိုက်ဆံအိတ်လိပ်စာ",
      operate: "တည်းဖြတ်ပါ",
      realName: "နာမည်အမှန်ကန်",
      enterEmailAddress: "အီးမေးလ်လိပ်စာထည့်ပါ",

      // activity
      applyNow: "ယခုလျှောက်ထားပါ",
      applyLogin: "ပရိုမိုးရှင်းအတွက် လျှောက်ထားရန် ဝင်ရောက်ပါ",
      unavailableActivity: "လျှောက်ထားပြီးပြီ၊ ထပ်မံလျှောက်ထား၍မရပါ။",
      contentRequired: "အကြောင်းအရာကို ဗလာမဖြစ်ရပါ",
      issueTypeRequired: "ပြဿနာအကြောင်းကို ရွေးပေးပါ",

      // recharge
      recharge: "ငွေသွင်း",
      pay_amount: "ငွေသွင်း ပမာဏ",
      pay_address: "TRC20 ၏ USDT ငွေပေးချေမှုလိပ်စာ",
      alipay_url: "Alipay ငွေပေးချေမှုလိပ်စာ",
      pay_complete:
        "ကျေးဇူးပြု၍ မိနစ် 30 အတွင်း ငွေပေးချေမှု အပြီးသတ်ပါ- မဟုတ်ပါက မှာယူမှု မမှန်ပါ",
      time_left: "ကျန်သေးသည်",
      tip: "ကြင်နာတတ်တဲ့ အကြံပြုချက်",
      payment: "ငွေပေးချေမှုလိုင်း",
      supportBank: "ကျေးဇူးပြု၍ ပံ့ပိုးပေး‌သောဘဏ်ကို ရွေးချယ်ပါ",
      choosePayment: "ငွေပေးချေမှုနည်းလမ်းကို ‌ရွေးချယ်ပါ",
      enterDepositAmount: "ကျေးဇူးပြု၍ အပ်ငွေပမာဏကို ထည့်ပါ",
      yuan: "ယွမ်",
      all: "အားလုံး",
      claimNow: "ယခုရယူပါ",
      claimed: "ရယူပြီး",
      submitBtn: "လျှောက်လွှာတင်ပါ",
      slotNo8ExtremeChallenge: "8ကြိမ်တိုင်းဆုရမည်",
      tip1: "① Antoken သည် ကမ္ဘာ့ထိပ်တန်း virtual ငွေကြေးအွန်လိုင်းပိုက်ဆံအိတ်ဖြစ်သည်။ အပ်ငွေများနှင့် ငွေထုတ်မှုများကို အချိန်နှင့်တပြေးညီ အလိုအလျောက်လက်ခံရရှိပြီး ငွေလွှဲခြင်းဆိုင်ရာ လွှဲပြောင်းမှုများကို ပိုမိုမြန်ဆန်စေပြီး ပိုမိုလုံခြုံစေသည်။",
      tip2: "② Antoken ကိုယ်ရေးကိုယ်တာပိုက်ဆံအိတ် APP ကိုဒေါင်းလုဒ်လုပ်ပါ- ဝဘ်ဆိုဒ် https://antoken.pro သို့ တိုက်ရိုက်သွားရောက်ကြည့်ရှုရန် နှိပ်ပါ။",
      tip3: "③ ငွေသွင်းသည့်အခါတိုင်း၊ နောက်ဆုံးပေါ်ငွေပေးချေမှုအချက်အလက်ကိုရရှိရန် အပ်ငွေချန်နယ်ကို အသုံးပြုရန်လိုအပ်ပါသည်။ ငွေပေးချေမှုအချက်အလက်ကို အခါအားလျော်စွာ ပြောင်းလဲသွားပါမည်။ ကျေးဇူးပြု၍ အပ်ငွေမှတ်တမ်းတွင် ငွေပေးချေမှုကတ်အချက်အလက်အဟောင်းကို မသုံးပါနှင့်၊ သို့မဟုတ်ပါက အကောင့်သည် ပျက်သွားမည်ဖြစ်ပါသည်။ credit မခံရပါ။。",
      tip4: "④ ပေးချေမှုပမာဏသည် တင်သွင်းထားသည့်ပမာဏနှင့် ကိုက်ညီရပါမည်။ ကျေးဇူးပြု၍ ပမာဏကို မပြုပြင်ပါနှင့်၊ သို့မဟုတ်ပါက သင့်အမှတ်များကို တိုးမြှင့်နိုင်မည် မဟုတ်ပါ သို့မဟုတ် သင့်အမှတ်များတိုးလာမှု၏ အရှိန်ကို ထိခိုက်စေမည်ဖြစ်ပါသည်။。",
      tip5: "⑤ ချစ်လှစွာသောအဖွဲ့ဝင်များ၊ အွန်လိုင်းအဖွဲ့ဝင်များ၏တက်ကြွစွာပါဝင်မှုနှင့်လူကြိုက်များသောပွဲများများရှိသောကြောင့် ၀ က်ဘ်ဆိုက်၏သိုက်လုပ်ငန်းသည်သိသိသာသာတိုးလာခဲ့သည်။ သင်၏အပ်ငွေများကိုအချိန်မီလက်ခံရရှိကြောင်းသေချာစေရန်အတွက်၊ 23:55-00:05] ညအချိန် Peak ငွေသွင်းချိန်များ သို့မဟုတ် ငွေသွင်းရန်အတွက် AnToken ကိုအသုံးပြုရန် ရွေးချယ်ပါ။。",
      tutorial: "လုပ်ထုံးလုပ်နည်သင်ယူခြင်း",
      realNameChannel:
        "အမည်ရင်းချန်နယ်- အွန်လိုင်းဘဏ်လုပ်ငန်း၊ Alipay နှင့် UnionPay တိမ်တိုက်အမြန်ဖြတ်သန်းကို ဖွင့်ပါ။",
      realNameChannelContent:
        "ဤချန်နယ်သည် အမည် သို့မဟုတ် မိုဘိုင်းဖုန်းနံပါတ်တစ်ခုနှင့် မသက်ဆိုင်ပါ။ စနစ်သည် အမည်ကို စည်းရန်နှင့် မိုဘိုင်းလ်ဖုန်းနံပါတ်ကို စစ်ဆေးရန် အမှာစာ ဝင်းဒိုးတစ်ခု ပေါ်လာပါမည်။ အဖွဲ့ဝင်က ဘဏ်ကတ်အချက်အလက်ကို မချိတ်မိပါက၊ အပ်ငွေဘဏ်ကတ်သို့၊ ပေါ်လာသော ဝင်းဒိုးသည် ခုန်ရန် အချက်ပြလိမ့်မည်။ အပ်ငွေဘဏ်ကတ်ကို ထည့်သွင်းပြီး ငွေပေးချေမှုဘဏ်ကတ်အချက်အလက် စာမျက်နှာကို ချိတ်တွဲပြီးနောက်၊ သင်သည် ငွေသွင်းနိုင်ပါသည်။ ဤအပ်ငွေချန်နယ်သည် ပိုလုံခြုံပြီး ပိုမြန်သည်။。",
      exchangeRate: "USDT မှ RMB ရည်ညွှန်းငွေလဲနှုန်း",
      exchangeUsdtRate: " USDT ငွေလဲနှုန်း",
      exchangeRateMMK: "RMB သို့ ကျပ်ငွေလဲလှယ်နှုန်း",
      comment: "မှတ်ချက် ",
      rechargeConfirm: "အောင်မြင်စွာ ငွေသွင်းပြီးပါပြီ။",
      addBankAccount: "ငွေပေးချေကတ်နံပါတ်",
      accountNumber: "ငွေပေးချေမှုအကောင့်နံပါတ်",
      copyOrderNo:
        "ငွေလွှဲသည့်အခါ ဖောက်သည်ဝန်ဆောင်မှုမှ အတည်ပြုနိုင်စေရန် ဤမှာယူမှုနံပါတ်ကို ကူးယူပါ။",
      withdrawConfirm: "ငွေထုတ်ယူရန် သေချာပါသလား။",
      emailConfirm: "အီးမေးလ်ကို ဖျက်လိုသည်မှာ သေချာပါသလား။",
      withdrawlAccountName: "နာမည်",
      teamPerformance: "အသင်းစွမ်းဆောင်ရည်",
      openBank: "ဘဏ်စာရင်းဖွင့်ခြင်း",
      bankName: "ဘဏ်အမည်",
      withdrawlRate:
        "ထုတ်ယူသည့် ရန်ပုံငွေအကွာအဝေးသည် 100ယွမ်ထက် မနည်းနိုင်ပါ。",
      USDTChoose: "USDTပရိုတိုကောကို ရွေးပါ",
      withdrawlAmount: "ငွေထုတ်ပမာဏ",
      Kyat: "ကျပ်ငွေ",
      USDTprotocol: "USDTပရိုတိုကော",
      bank: "ဘဏ်",
      fullAmount: "ပမာဏအပြည့်",
      checkboxAmount: "အားလုံးကို ထုတ်ယူသည့်ပမာဏကို ရွေးပါ။",
      enterWithdrawlPass: "ကျေးဇူးပြု၍ ငွေထုတ်ရန် Passwordကို ထည့်ပါ။",
      withdrawlTip1:
        "ကျေးဇူးပြု၍ လောင်းကြေးငွေပေးချေမှုပြီးဆုံးပြီးနောက် 10-15 မိနစ်အထိ စိတ်ရှည်စွာစောင့်ပါ၊ နှင့်စနစ်သည် ထိရောက်သောစီးဆင်းမှုကို အလိုအလျောက်ပြင်ပေးပါမည်။ အသေးစိတ်နှင့် ထိရောက်သော စီးဆင်းမှုစည်းမျဉ်းများအတွက်၊ တရားဝင်ဝဘ်ဆိုက် [အွန်လိုင်းဖောက်သည်ဝန်ဆောင်မှု] နှင့် တိုင်ပင်ပါ။",
      withdrawlTip2:
        "မည်သည့် ပရိုမိုးရှင်း လှုပ်ရှားမှုများတွင် မပါဝင်ရသေးသော အပ်ငွေများသည် သင်မရုပ်သိမ်းမီ ထိရောက်သော လှည့်ပြန်မှု (လောင်းကြေးပမာဏ) ကို 1 ကြိမ် လောင်းကြေးပေးရန် လိုအပ်ပါသည်။ အစီအစဉ်တွင် သင်ပါဝင်ပါက၊ [ Activity Bonus Rollover Related Rules] ကို ကိုးကားပါ။。",
      withdrawlTip3:
        "ဘဏ်၏ငွေပေးချေမှုအန္တရာယ်ထိန်းချုပ်မှုစနစ်အရ သင့်ထုတ်ယူမှုကို တစ်ခု သို့မဟုတ် တစ်ခုထက်ပိုသောပေးချေမှုတွင် ပေးချေမည်ဖြစ်သည်။ ManBetX သည် ဤနေရာ၌ ရရှိသည့်ပမာဏသည် ထုတ်ယူသည့်ပမာဏနှင့်ကိုက်ညီကြောင်း သေချာစေရန် ManBetX မှ ကတိပြုပါသည်။。",
      withdrawlTip4:
        "သင်၏ထုတ်ယူသည့်ပမာဏသည် သင့်အကောင့်ကို ဘေးကင်းလုံခြုံစွာရောက်ရှိစေရန် သေချာစေရန်အတွက်၊ ထုတ်ပေးသည့်ဘဏ်သည် [Online Banking] နှင့် [WeBank] ကို မပံ့ပိုးပါ။ ငွေထုတ်ယူရန် လိုအပ်ပါက၊ တင်ပြရန် အခြားထုတ်ပေးသည့်ဘဏ်များနှင့် ချိတ်ဆက်ပါ။ သင်၏ပူးပေါင်းဆောင်ရွက်မှုအတွက် ကျေးဇူးတင်ပါသည်။。",
      // rebate
      accumulatedcollection: "စုဆောင်းခြင်း",
      bets_next_level:
        "သင်၏ အစုအဝေးအလောင်းအစားများကို နောက်တစ်ကြိမ် အဆင့်မြှင့်သည့်အခါ",
      lastNextLevelRecharge: "ယွမ်အား ပြန်လည်ဖြည့်သွင်းခြင်းဖြစ်သည်။",
      DistanceNextLevel: "နောက်တစ်ဆင့်သို့ အကွာအဝေး",
      selectAll: "အားလုံးကို ရွေးပါ",
      replyMessage: "စာပြန်နိုင်သော စာများကိုသာ ပြပါ။",
      accumulatedRecharge: "စုဆောင်းအားငွေဖြည့်ခြင်း",
      toBeCollect: "စုဆောင်းထားရန်",
      categories: "အမျိုးအစားအားလုံး",
      validBet: "တရားဝင်လောင်းကြေး",
      unrebateAmount: "ပြန်အမ်းမပေးသည့် ပမာဏ",
      rebateAmount: "ပြန်အမ်းငွေပမာဏ",
      rebateAssignType: "အမျိုးအစား",
      rebateTime: "ပြန်အမ်းချိန်",
      play: "ကစား",
      clickToClaim: "တစ်ချက်နှိပ်ရုံဖြင့် ရယူလိုက်ပါ",
      page: "စာမျက်နှာ",
      total: "စုစုပေါင်း",
      totalpage: "စာမျက်နှာ",
      point: "အပိုင်းအစများ",
      of: "၏",

      myRebate: "ကျွန်ုပ်အကြွေး",
      envelope: "အနီရောင်စာအိတ်မှတ်တမ်း",
      activityRecord: "လှုပ်ရှားမှုမှတ်တမ်း",

      // envelope
      remain: "ကျန်အချိန်များ",
      receiveRedEnvelope: "စာအိတ်အနီကို လက်ခံရယူပါ",
      startRechargeAmount: "ပြန်လည်ဖြည့်သွင်းသည့်ပမာဏကို စတင်ပါ",
      endRechargeAmount: "အားပြန်သွင်းသည့်ပမာဏကို အဆုံးသတ်ပါ",
      envelopeAmount: "အနီရောင်စာအိတ်ပမာဏ",
      rechargeTime: "‌ငွေဖြည့်ချိန်",
      collectTime: "စုဆောင်းချိန်",

      // activity record
      memberAccount: "အဖွဲ့ဝင်အကောင့်",
      appAccount: "လျှောက်လွှာပမာဏ",
      eventTitle: "ပွဲခေါင်းစဉ်",
      typeOfActivity: "လှုပ်ရှားမှုအမျိုးအစား",
      applicationTime: "လျှောက်လွှာအချိန်",

      // hot message
      platformAnnounce: "ကြေညာချက်",
      platformAnnounceContent:
        "ချစ်လှစွာသောဖောက်သည်များ ဖျော်ဖြေရေး မှကြိုဆိုပါသည်။ ကစားသမားအများစုကို ပိုမိုကောင်းမွန်သောအတွေ့အကြုံကိုပေးစွမ်းနိုင်စေရန်အတွက် အီလက်ထရွန်းနစ်ဂိမ်းများ၊ တိုက်ရိုက်ဗီဒီယို၊ စစ်တုရင်၊ ကတ်များ၊ ငါးဖမ်းခြင်းနှင့် e-sport အမျိုးမျိုးတို့ကို ပံ့ပိုးပေးရန်အတွက် ဤပလက်ဖောင်းကို ဂရုတစိုက်တည်ဆောက်ထားပါသည်။ 1. ☆☆☆ အားပြန်သွင်းရန် အကြံပြုချက်များ ☆☆☆ ပြန်လည်အားသွင်းရန်အတွက် ပထမရွေးချယ်မှုမှာ [USDT] လွှဲပြောင်းခြင်းဖြစ်သည်- ချစ်လှစွာသောအဖွဲ့ဝင်များ၊ ပြင်ပမှငွေဖြည့်သွင်းမှုများ၏ မကြာသေးမီက မတည်မငြိမ်ဖြစ်မှုကြောင့် [USDT] လွှဲပြောင်းခြင်းနှင့် အားပြန်သွင်းခြင်း၊ ပမာဏများစွာကို ပြန်လည်သုံးသပ်ခြင်းမရှိဘဲ စက္ကန့်ပိုင်းအတွင်း အပ်နှံပါမည်။ ကျေးဇူးပြု၍ ဖြည့်စွက်ပါ။ အပ်ငွေလိပ်စာတွင် မှန်ကန်စွာ၊ ငွေပေးချေမှုကို လျှော့ပေးပါမည်။ စပေါ်ငွေကို စက္ကန့်ပိုင်းအတွင်း အပ်နှံပါမည်။",
      siteMessage: "ဆိုက်သတင်းစကား",
      feedbackMessage: "အကြံပြုရန်",
      feedback: "တုံ့ပြန်ချက်",
      informationList: "အချက်အလက်စာရင်း",
      selectFeedbackType:
        "ကျေးဇူးပြု၍ အကြံပြုချက်ပေးလိုသော မေးခွန်းကို ရွေးချယ်ပါ။",
      subject: "ဘာသာရပ်",
      titlePlaceholder:
        "ကျေးဇူးပြု၍ ခေါင်းစဉ်တစ်ခုထည့်ပါ (စကားလုံး 100 ကန့်သတ်ထားသည်)",
      contentPlaceholder:
        "သင့်ပြဿနာကို ကျေးဇူးပြု၍ ဖော်ပြပါ (စကားလုံး 1000 ကန့်သတ်ထားသည်)",
      uploadImage: "ပုံတင်ပါ။",
      imageFileLimit:
        "ပုံဖိုင်ဖော်မတ်- png၊ jpg၊ နှင့် jpeg။ ဖိုင်အရွယ်အစား ကန့်သတ်ချက်- 2MB။ သိမ်းဆည်းရန်- 7 ရက်။",
      welcomeCustomer: "ချစ်လှစွာသောဧည်သည်းများ：ဖျော်ဖြေရေးမှကြိုဆိုပါတယ်",
      uptodate: "နောက်ဆုံးပေါ်",
      content: "အကြောင်းအရာ",
      obey: "နာခံ",
      orderOfSite: "ကျေးဇူးပြု၍ ဤsite၏အမိန့်ကိုသတိရှိရှိလိုက်နာပါ",

      // agent site
      agentSystem: "အေးဂျင့်နောက်ခံစီမံခန့်ခွဲမှု",
      agentLogin: "အေးဂျင့်လှယ်ဝင်ပါ",
      returnHome: "ပြန်လာ",
      inputUsername: "အသုံးပြုသူအမည်ကို ထည့်သွင်းပါ",
      inputUser1name: "请输入6-16字母及数字组合的账号",
      inputPassword: "Passwordထည့်ပါ",
      inputRegisterPassword: "请输入密码 (8-20位数字+字母组合)",
      inputCode: "ကျေးဇူးပြု၍ အတည်ပြုကုဒ်ကိုထည့်ပါ",
      cancelModel: "မလုပ်တော့ပါ",
      backToHome: "ပင်မစာမျက်နှာသို့ ပြန်သွားရန်",
      sureBackHome: "ထွက်ပြီး ပင်မစာမျက်နှာသို့ ပြန်သွားလိုသည်မှာသေချာပါသလား?",
      hint: "သဲလွန်စ",
      dataManagement: "‌ဒေတာစီမံခန့်ခွဲမှု",
      agentHomePage: "အေးဂျင့်အိမ်စာမျက်နှာ",
      agencyProfile: "အေးဂျင့်စီခြုံငုံသုံးသပ်ချက်",
      todayOverView: "ယနေ့ ခြုံငုံသုံးသပ်ချက်",
      username: "အသုံးပြုသူအမည်",
      refresh: "ပြန်လည်ဆန်းသစ်ပါ",
      welcome: "Hualong မှကြိုဆိုပါသည်",
      todayRechargeAmount: "ယနေ့ ငွေဖြည့်ပမာဏ",
      rmbAmount: "ယွမ်ပမာဏ",
      usdtAmount: "USDTပမာဏ",
      managementAmount: "စီမံခန့်ခွဲမှုပမာဏ",
      todayWithdrawlAmount: "ယနေ့ထုတ်ငွေပမာဏ",
      listOfPlayer: "အပြေးကစားသမားများစာရင်း",
      playerList: "ပြေးစာရင်း",
      confirmList: "အမည်ပျက်စာရင်း ပိတ်ဆို့ထားသည်",
      totalRechargeList: "ဤလအတွင်း ငွေဖြည့်သည့်အရေးအတွက်",
      count: "ရေတွက်ခြင်း",
      monthWithdrwal: "ယခုလအတွင်း စုစုပေါင်းထုတ်ယူမှုများ",
      totalWinLose: "စုစုပေါင်းအရှုံးနှင့်အနိုင်",
      teamWinLose: "အသင်းအနိုင်/အရှုံး စုစုပေါင်း",
      viewDetails: "အသေးစိတ်ကြည့်ရှုပါ",
      rebatetoday: "ဒီနေ့",
      thisMonth: "လက်ရှိလ",
      thisWeek: "တစ်ပတ်",
      thisPercent: "ကိုယ်စားလှယ်ပြန်အမ်းငွေအချိုး",
      agentAccountDesc:
        "ဤအမှတ်ပမာဏကို ဂိမ်းကစားရန်အတွက် ကစားသမားများအတွက်သာ အသုံးပြုပြီး နောက်ဆုံးဖြေရှင်းချက်သည် အမှန်တကယ်သုံးစွဲမှုငွေတောင်းခံလွှာအပေါ် အခြေခံပါသည်။",
      invitationCode: "ပရိုမိုးရှင်းလင့်ခ်က",
      withdrawlReview: "ငွေထုတ်ခြင်း ပြန်လည်သုံးသပ်ခြင်း",
      actualPayment: "အမှန်တကယ်ငွေပေးချေမှု",
      bankCardNumber: "ဘဏ်ကတ်နံပါတ်",
      remark: "မှတ်ချက်",
      createTime: "ဖန်တီးချိန်",
      pending: "ဆိုင်းငံ့ထားသော သုံးသပ်ချက်",
      passed: "လက်ခံ",
      passedConfirm: "ကျော်ဖြတ်ချင်တာ သေချာလား။",
      rejected: "ငြင်းပယ်ခြင်း",
      underReview: "စစ်ဆေးဆဲ",
      memberList: "အဖွဲ့ဝင်စာရင်း",
      paymentList: "ငွေပေးချေမှုစာရင်း",
      createMember: "အဖွဲ့ဝင်မှုတစ်ခုဖန်တီးပါ",
      customerBalance: "ဖောက်သည်လက်ကျန်",
      memberlevel: "အဖွဲ့ဝင်အဆင့်",
      superAgent: "သာလွန်အေးဂျင့်",
      yes: "ဟုတ်တယ်",
      no: "မဟုတ်ပါ",
      block: "နာမည်ပျက်စာရင်း",
      invitation: "ဖိတ်စာကုဒ်",
      activate: "ရပါပြီ",
      closed: "ပိတ်ခြင်း",
      suspend: "ခေတ္တရပ်ပါ",
      rechargeReview: "ငွေဖြည့်ခြင်း စီမံခန့်ခွဲမှု",
      accountType: "အကောင့်အမျိုးအစား",
      copy: "ကော်ပီ",
      rewardtitle: "အကြံပြုထားသောလင့်ခ်နှင့်QRကုဒ်များ",
      qrcode: "QRကုဒ်ကိုသိမ်းဆည်းပါ",
      depoistTime: "ငွေသွင်းရတာပါ",
      withdrawlTime: "ငွေသွင်းရတာပါ",
      totalDeposit: "စုစုပေါင်းအပ်ငွေ",
      totalWithdrawl: "စုစုပေါင်းထုတ်ယူမှုများ",
      totalValidBet: "စုစုပေါင်း တရားဝင်လောင်းကြေး",
      winloseAmount: "အကျင့်ပျက်ခြစားမှု စုစုပေါင်း",
      totalRebate: "စုစုပေါင်းအသုံးပြုသူပြန်အမ်းငွေပမာဏ",
      bonusGive: "ဘောနပ်စ်လက်ဆောင်",
      noRecord: "တူညီသောမှတ်တမ်းကို မတွေ့ပါ",
      profitloss: "အရှုံးအမြတ်ထုတ်ပြန်ချက်",
      profitLossStatement: "အရှုံးအမြတ်ထုတ်ပြန်ချက်",
      commissionPayment: "ကော်မရှင်ငွေပေးချေမှုမှတ်တမ်း",
      commissionPaymentRecord: "ကော်မရှင်ငွေပေးချေမှုမှတ်တမ်း",
      transactionTime: "ငွေပေးငွေယူအချိန်",
      balanceBeforeTransaction: "ငွေလွှဲခြင်းမပြုမီ လက်ကျန်ငွေ",
      balanceAfterTransaction: "ငွေလွှဲပြီးနောက်လက်ကျန်",
      rechargeGift: "ငွေဖြည့်လက်ဆောင်",
      eventGift: "ပွဲလက်ဆောင်များ",
      bonusGift: "ဘောနပ်စ်လက်ဆောင်",
      commissionReport: "ကော်မရှင်အစီရင်ခံစာ",
      numberSubordinate: "လက်အောက်ငယ်သားအရေအတွက်",
      totalAmountOfwinloss: "စုစုပေါင်းအနိုင်နှင့်အရှုးပမာဏ",
      agentcommissionreport: "အေဂျင်စီကော်မရှင်အစီရင်ခံစာ",
      totaleffectivebets: "စုစုပေါင်းလောင်းထားသောပမာဏ",
      agencyrebate: "အေဂျင်စီပြန်အမ်းငွေ",
      profitfromwinningorlosing: "အရှံးနိုင် အမြတ်အစွန်း",
      totalAmountOfbet: "စုစုပေါင်းထိရောက်သောလောင်းကစား",
      totalRechargeAmount: "စုစုပေါင်း‌‌ငွေဖြည့်သည့်ပမာဏ",
      bettingRecord: "လောင်းကစားမှတ်တမ်းများ",
      financialRecord: "ငွေကြေးမှတ်တမ်း",
      platformName: "ပလပ်ဖောင်းအမည်",
      transactionId: "ငွေပေးငွေယူ ID",
      bettingContent: "လောင်းကစားအကြောင်းအရာ",
      categoryName: "အမျိုးအစားအမည်",
      totalBetAmount: "စုစုပေါင်းလောင်းကြေးပမာဏ",
      effectiveBetAmount: "ထိရောက်သောလောင်းကြေးပမာဏ",
      profit: "အမြတ်အစွန်း",
      winningStatus: "နိုင်သည်ဖြစ်စေ ရှုံးသည်ဖြစ်စေ",
      whetherRebate: "ပြန်အမ်းမှာလား",
      memberShiprebate: "အသင်းဝင်ကြေးပြန်အမ်းငွေ",
      userInfo: "အသုံးပြုသူအချက်အလက်",
      password: "Password",
      memberAccountType: "အဖွဲ့ဝင်",
      edit: "ပြုပြင်ရန်",
      balance: "လက်ကျန်ငွေ",
      checkIn_rewards2: "အပ်ငွေဆုလာဘ် (2)",
      distributionRecord: "ဖြန့်ဝေမှတ်တမ်း",
      depositAndPlay: "ငွေသွင်းပြီး ကစားပါ၊ ကြွယ်ဝမှုရရှိပါစေ",
      claimDeadline: "ရယူရန်နောက်ဆုံးနေ့:2024/11/10 23:59:59",
      sent8: "အမြဲတမ်း ၈ ပေးမည်",
      dailyCheckIn: "နေ့စဉ် အပ်ငွေ",
      maxClaimed: "အများဆုံးရယူနိုင်မှု ၁၉၁",
      settlementPeriod:
        "ငွေပေးချေမှုကာလ:2024/10/28 00:00:00 - 2024/11/07 23:59:59",
      distributedTotal: "ဖြန့်ဝေပြီး (စုစုပေါင်း: ၁၄.၈၂ ယွမ်)",
      serialNo: "အမှတ်စဉ်",
      distributionTime: "ဖြန့်ဝေချိန်",
      transactionType: "ငွေလွှဲအမျိုးအစား",
      transactionAmount: "ငွေလွှဲပမာဏ",
      depWidBetProLoss: "ငွေသွင်း/ငွေထုတ်/လောင်းကစား/အမြတ်အရှုံး",
      transactionCategory: "ငွေလွှဲအမျိုးအစား",
      dispatchTime: "ဖြန့်ဝေဖြန့်ဝေချိန်",
      transaction75: "စုစုပေါင်း 75 ခု (စုစုပေါင်း 576.99 ယွမ်)",

      //agent member list
      commission: "ကော်မရှင်",
      commissionRateSetting: "ကော်မရှင်စက်တင်",
      editForm: "ပြုပြင်ခြင်း",
      create_sub_user: "Sub User ကို ဖန်တီးပါ",
      change_password: "စကားဝှက်ပြောင်းရန်",
      blacklist: "အမည်ပျက်စာရင်း",
      identity: "အထောက်အထား",
      agent_mobile: "အေးဂျင့်",
      user_mobile: "မိုဘိုင်းနံပါတ်",
      user_status: "အသုံးပြုသူ အခြေအနေ",
      last_login_ip: "နောက်ဆုံးဝင်ရောက်ခြင်း ip",
      last_login_country: "နိုင်ငံ",
      last_login_city: "မြို့",
      last_login_time: "နောက်ဆုံးဝင်ရောက်ချိန်",
      agent_status: "အေးဂျင့်အခြေအနေ",
      updated_at: "updatedအချိန်",

      //payment list
      financial_type: "ဘဏ္ဍာရေးအမျိုးအစား",
      currentBalance: "လက်ကျန်ငွေ",
      for_user: "အသုံးပြုသူအတွက်",
      search_phone: "ဖုန်းနံပါတ်ဖြင့် ရှာဖွေပါ",
      search_username: "အသုံးပြုသူအမည်ဖြင့်ရှာဖွေပါ။",

      // mobile
      mobileRecharge: "ငွေဖြည့်",
      mobileWallet: "ပိုက်ဆံအိတ်စီမံခန့်ခွဲမှု",
      hot: "လူကြိုက်များသည်",
      moibleActivity: "ကမ်းလှမ်းချက်",
      allData: "ကမ်းလှမ်းချက်အားလုံး",
      missionReward: "လုပ်ငန်းတာဝန်",
      eventDetail: "ပွဲအသေးစိတ်",
      gift: "ဆက်တိုက်အနိုင်ရရှိမှုအတွက် ရက်ရောသောလက်ဆောင်များဖြင့် သီးသန့်ဗီဒီ",
      mobileVip: "vipအထူးအခွင့်အရေးများ",
      needHelp: "အကူညီလိုတယ်",
      plzContactService: "ကျေးဇူးပြု၍ ဖောက်သည်ဝန်ဆောင်မှုကို ဆက်သွယ်ပါ။",
      selfService: "မိမိဘာသာပြုလုပ်ရန်",
      accountManagement: "အကောင့်ပြောင်းလဲမှုအသေးစိတ်",
      detail: "အသေးစိတ်",
      mobileVipLevel: "VIPအဆင့်",
      vipNote1: "ပွဲ၏စည်းကမ်းသတ်မှတ်ချက်များ",
      vipNote2:
        "ပွဲ၏ အထွေထွေစည်းကမ်းသတ်မှတ်ချက်များ။ ပလက်ဖောင်းသည် လှုပ်ရှားမှုများကို ပြုပြင်မွမ်းမံရန်၊ ရပ်တန့်ရန်နှင့် အပြီးသတ်ရှင်းလင်းချက်လုပ်ပိုင်ခွင့်ကို လက်ဝယ်ရှိသည်။",
      modifyTextInfo:
        "သင်၏ကိုယ်ရေးကိုယ်တာနှင့် လုံခြုံရေးအတွက်၊ ၎င်းကို ပြုပြင်၍မရပါ၊ ကျေးဇူးပြု၍ ဖောက်သည်ဝန်ဆောင်မှုကို ဆက်သွယ်ပါ။",
      changePass: "Passwordကိုပြောင်းရန်",
      totalAsset: "စုစုပေါင်းပိုင်ဆိုင်မှု",
      bankDetail:
        "ကျေးဇူးပြု၍ ပိုက်ဆံအိတ်သည် အတုအယောင်ငွေကြေးအိတ်လိပ်စာကို သေချာစစ်ဆေးပါ။ ဖြန့်ဝေထားသော ကုဒ်ဝှက်စနစ်အပေါ် အခြေခံ၍ သင်၏ပိုင်ဆိုင်မှုများကို အပြည့်အဝကာကွယ်ထားသည်။",
      datePlaceholer: "နှစ်-လ-ရက်",
      get_sms_code: "အတည်ပြုကုဒ် ရယူပါ",
      send: "ပို့ပါ",
      liveChatWelcome:
        "ကျွန်ုပ်တိုသည် သင့်အား ဝန်ဆောင်မှုပေးရန် ပျော်ရွှင်ပါသည်။ လူကြီးမင်းရဲ့ သိလိုသမျှကို အချိန် အနည်းငယ်အတွင်းပြန်လည် ဖြေကြားပေးပါမယ်။",
      increasePoints: "အမှတ်များတိုးရန်",
      reducePoints: "အမှတ်များလျှော့ချရန်",
      problemGame: "ဂိမ်းကာလအတွင်းပြဿနာများ",
      otherQuestions: "အခြားမေးခွန်းများ",
      chatCustomerService: "Hualong ဝန်ဆောင်မှု",
      whether_rebate: "ပြန်အမ်းငွေခြေနေ",
      Cashback_record: "ငွေပြန်အမ်းမှုမှတ်တမ်း",
      online_status: "လိုင်းပေါ်ခြေနေ",
      commission_rebate: "ကလစ်တစ်ချက်နှိပ်ပြန်အမ်းငွေ",
      total_rebate_amount: "စုစုပေါင်း ကိုယ်စားလှယ်ပြန်အမ်းငွေပမာဏ",
      totalProfit: "စုစုပေါင်းအမြတ်",
      recharge_vip_level: "vip အဆင့်ကို အားပြန်သွင်းပါ",
      sharereward: "သူငယ်ချင်းများကို ရည်ညွှန်းခြင်းအတွက် ဆုလာဘ်",
      vip_effective_bet_level: "vip ထိရောက်သောလောင်းကစားအဆင့်",
      total_amount_received: "လက်ခံရရှိသည့် စုစုပေါင်းပမာဏ",
      recharge_amount: "စုဆောင်းအားပြန်သွင်းသည်",
      valid_bets: "စုစည်းထိရောက်သော လောင်းကစားများ",
      valid_bets_collected: "စုဆောင်းရရှိထားသော တရားဝင်လောင်းကြေးများ",

      //app info
      version: "ဗားရှင်း",
      size: "အရွယ်အစား",
      update_time: "အပ်ဒိတ်အချိန်",
      match_android: "Android ဖုန်းများအတွက် သင့်လျော်သည်",
      china_download: "ပြည်တွင်းဒေါင်းလုဒ်",
      oversea_download: "ပြည်ပဒေါင်းလုဒ်",
      match_ios: "Apple မိုဘိုင်းလ်ဖုန်းများတွင် အသုံးပြုနိုင်သည်",
      click_download: "ဒေါင်းလုဒ်လုပ်ရန်",
      suggest_message:
        "iPhone ၏ Safari browser ကို အသုံးပြု၍ ဒေါင်းလုဒ်လုပ်ရမည်",

      // Responsibility Page
      responsible_game: "တာဝန်ရှိသောဂိမ်းကစားခြင်း",
      bet_res: "1. လောင်းကစားတာဝန်",
      bet_res_content:
        "AK Group သည် ပရော်ဖက်ရှင်နယ်အွန်လိုင်းဖျော်ဖြေရေးပလက်ဖောင်းတစ်ခုဖြစ်သည်။ သို့သော်လည်း ကျွန်ုပ်တို့သည် ကစားသမားတိုင်းအတွက် တာဝန်ရှိသောဂိမ်းကစားမှုပုံစံကို တန်ဖိုးထားပါသည်။ ကျွန်ုပ်တို့၏ရည်ရွယ်ချက်မှာ အသုံးပြုသူအတွေ့အကြုံကို မြှင့်တင်ပြီး၊ ဂိမ်းကစားမှုပြဿနာများမဖြစ်သည် gaming ပတ်ဝန်းကျင်တစ်ခုကို ဖန်တီးပေးလိုခြင်းဖြစ်ပါသည်။ ဂိမ်းကစားခြင်းသည် သက်တောင့်သက်သာဖြစ်စေရန်၊ သင်၏ငွေကြေး၊ အလုပ်အကိုင်နှင့် မိသားစုဘဝကို ထိခိုက်စေမည့်အထိ မဖြစ်သင့်ပါ။ ထို့ကြောင့် သင်၏ gaming အပြုအမူများကို အမြဲသတိပြုရန်နှင့် အလုပ်တာဝန်များကို အချိန်မှန် ဆောင်ရွက်ရန်အကြံပြုပါသည်။",

      age_requ: "2. အသက်ကန့်သတ်ချက် - အသက် 18 နှစ်အထက်",
      age_requ_content:
        "ဤဝဘ်ဆိုဒ်သို့ ဝင်ရောက်ရန်အတွက် သင့်အသက်သည် အနည်းဆုံး 18 နှစ် (သို့မဟုတ် သင့်ဒေသတွင်း ဥပဒေအရ သတ်မှတ်ထားသောအသက်) ကျော်ရပါမည်။ အသက်မပြည့်သူများသည် ကျွန်ုပ်တို့၏ဝဘ်ဆိုဒ်တွင် အကောင့်ဖွင့်ခြင်း၊ ငွေပေးချေခြင်း မပြုလုပ်ရန် တင်းကျပ်စွာတားမြစ်ထားပါသည်။ ဤကိစ္စအား ကျွန်ုပ်တို့သည် အလွန်တိကျစွာဖြင့် ကိုင်တွယ်ဆောင်ရွက်ပါသည်။",

      gamb_pb_prevent: "3. လောင်းကစားပြဿနာကာကွယ်ရေး",
      gamb_pb_prevent_content:
        "လောင်းကစားအပေါ် သင်၏အပြုအမူများကို ပုံမှန်စွာစစ်ဆေးကြည့်ရန်နှင့် အလွန်အကျွံဖြစ်နေခြင်း မဖြစ်စေရန် ကျွန်ုပ်တို့က အကြံပြုတားမြစ်လျက်ရှိပါသည်။",

      gamb_pb_prevent_1: "1. လောင်းကစားကြောင့် အလုပ်ဆုံးရှုံးဖူးပါသလား?",
      gamb_pb_prevent_2:
        "2. သင်၏ဂုဏ်သိက္ခာကို လောင်းကစားကြောင့် ထိခိုက်ဖူးပါသလား?",
      gamb_pb_prevent_3:
        "3. လောင်းကစား ကစားပြီးနောက် တစ်ခါတစ်ရံ အပြစ်ခံစားရဖူးပါသလား? အနိုင်ရငွေကို အကြွေးဆပ်ရန် သုံးဖူးပါသလား?",
      gamb_pb_prevent_4:
        "4. လောင်းကစားကြောင့် သင့်စိတ်အားထက်သန်မှု လျော့နည်းသွားဖူးပါသလား?",
      gamb_pb_prevent_5: "5. ရှုံးနိမ့်ပြီးနောက် ပြန်အနိုင်ရချင်သလား ရှုံး?",
      gamb_pb_prevent_6: "6. အနိုင်ရပြီးနောက် ပိုမိုအနိုင်ရချင်ဖူးပါသလား?",
      gamb_pb_prevent_7: "7. ငွေမရှိလျှင်တောင် လောင်းကစားဆက်လုပ်ဖူးပါသလား?",
      gamb_pb_prevent_8: "8. လောင်းကစား ကစားဖို့ ငွေချေးဖူးပါသလား?",
      gamb_pb_prevent_9: "9. လောင်းကစား ကစားဖို့ ပစ္စည်းရောင်းဖူးပါသလား?",
      gamb_pb_prevent_10:
        "10. လောင်းကစားငွေကို မိမိနေ့စဉ်အသုံးစရိတ်အတွက် သုံးဖို့တွန့်ဆုတ်ဘူးလား?",
      gamb_pb_prevent_11:
        "11. လောင်းကစားကြောင့် သင့်မိသားစုနှင့်ကျန်းမာရေးအပေါ် သက်တောင့်သက်သာ မရှိတော့ဘူးလား?",
      gamb_pb_prevent_12:
        "12. မျှော်ထားသည့်အချိန်ထက် ပိုကြာအောင်လောင်းကစားဖူးပါသလား?",
      gamb_pb_prevent_13:
        "13. စိတ်ဖိစီးမှု၊ ပြဿနာများမှ ရှောင်ဖို့ လောင်းကစားကို အသုံးပြုဖူးပါသလား? ငွေရှာဖို့ ရာဇဝတ်မှုကျူးလွန်ဖူးသလား သို့မဟုတ် စဉ်းစားဖူးပါသလား?",
      gamb_pb_prevent_14: "14. လောင်းကစားကြောင့် အိပ်မပျော် ဖြစ်ဖူးပါသလား?",
      gamb_pb_prevent_15:
        "15. စိတ်ဖိစီးမှု၊ အငြင်းပွားမှုတွေကြောင့် လောင်းကစားဖက်ရောက်သွားဖူးပါသလား?",
      gamb_pb_prevent_16:
        "16. ကြာကြာလောင်းကစား ကစားပြီးနောက် ထပ်မံကစားချင်တဲ့ ဆန္ဒရှိလာဖူးပါသလား?",
      gamb_pb_prevent_17:
        "17. လောင်းကစားရလဒ်ကြောင့် ကိုယ့်ကိုယ်ကိုထိခိုက်စေဖူးသလား သို့မဟုတ် သတ်သေဖို့စဉ်းစားဖူးပါသလား?",

      // AgentJoin.vue
      agent_ptnship: "အေးဂျင့်အဖွဲ့ဝင်ခြင်း",
      agent_ptnship_anoy1:
        "Hualong နှင့်ပူးပေါင်းပြီး မိမိကိုယ်တိုင်လုပ်ငန်းတစ်ခု စတင်နိုင်ပါတယ်။ ရင်းနှီးမြှုပ်နှံရန် မလိုအပ်ဘဲ၊ အန္တရာယ်နည်းပြီး ကော်မရှင်အာမခံချက်ပါရှိသောအတွက် ယုံကြည်စိတ်ချစွာ ဝင်ရောက်လုပ်ကိုင်နိုင်ပါတယ်။",
      agent_ptnship_anoy2:
        "အမြတ်နှစ်ဆ တိုးနိုင်တဲ့ အေးဂျင့်မော်ဒယ်အသစ် – အကန့်အသတ်မဲ့အခွင့်အရေးတွေနဲ့ တစ်စိတ်တစ်ပိုင်းအချိန်ပေးရုံနဲ့ပင် ငွေဝင်လာနိုင်တဲ့ အထူးအစီအစဉ်!",

      glorious_life: "အောင်မြင်မှုအပြည့် ဘဝတစ်ခု ဒီနေရာကစတင်ပါ။",
      intro:
        "Hualong Group ကို 2007 ခုနှစ်တွင် တည်ထောင်ခဲ့ပါသည်။အပြည်ပြည်ဆိုင်ရာလောင်းကစားလုပ်ငန်းများအနက်မှ အထင်ကရနှင့် အကျော်ကြားဆုံးကုမ္ပဏီများထဲမှတစ်ခုအဖြစ် ရပ်တည်လျက်ရှိပြီး၊ ကာစီနိုလိုင်စင်နှင့် အွန်လိုင်းလောင်းကစားလိုင်စင်နှစ်မျိုးလုံးရရှိထားပါသည်။Hualong Group သည် Live Baccarat, Dragon Tiger, အားကစားလောင်းကစား၊ ကာစီနိုစလော့ဂိမ်းများ၊ virtualဂိမ်းများ၊ Poker အစရှိသည့် အမျိုးမျိုးသောဂိမ်းများကို တင်ဆက်ပေးလျက်ရှိသည်။နှစ်ပေါင်းအတော်ကြာတည်မြဲစွာ လည်ပတ်လာသည့်အတိုင်း ကမ္ဘာအနှံ့ အသုံးပြုသူအလူအများကို အောင်မြင်စွာ တိုးချဲ့လာနိုင်ခဲ့ပါသည်။ကျွန်ုပ်တို့၏အမြင့်ဆုံးအရည်အသွေးရှိသော ပူးပေါင်းဆောင်ရွက်မှုစနစ်နှင့် အကောင်းဆုံးအေးဂျင့်အဖွဲ့ဝင်အစီအစဉ်များကို သင်အတွက် ဝမ်းမြောက်စွာဖြင့် ပံ့ပိုးပေးလိုက်ပါသည်။",

      agent_is:
        "အေးဂျင့်ဖြစ်ခြင်းက မိမိစီးပွားရေးတည်ထောင်ခြင်းနဲ့တူပါတယ်။ Hualong မှ ငွေကြေးပံ့ပိုးမှုနဲ့ လမ်းညွှန်မှုများပေးကာ ရင်းနှီးမြှုပ်နှံမှုမလိုဘဲ၊ အန္တရာယ်နည်းပြီး တည်ငြိမ်တဲ့ဝင်ငွေကို ရရှိနိုင်ပါတယ်။",

      agent_plans: "အေးဂျင့်ဖြစ်ခြင်း၏ အားသာချက် ၈ ချက်!",
      agent_plan_1:
        "၁။ အမြင့်ဆုံးကော်မရှင်နှုန်း – အမြတ်အများဆုံးရနိုင်မည့်စနစ်။",
      agent_plan_2:
        "၂။ စတင်ဖို့ကုန်ကျစရိတ်မလို အန္တရာယ်မရှိ– အမြတ်မြင့်မြင့်နဲ့ ကော်မရှင်မြန်မြန်ရယူလိုက်ပါ။",
      agent_plan_3:
        "၃။ နှစ်ဘက်သောဝင်ငွေများ၊ အွန်လိုင်း/အော့ဖ်လိုင်းဖောက်သည်များ၏ အနိုင်/ဆုံးရှုံးမရှိဘဲ တည်ငြိမ်ပြီး မြင့်မားသောဝင်ငွေကို ရရှိနိုင်ခြင်း။",
      agent_plan_4:
        "၄။ ပမာဏအကန့်အသတ်မရှိသော လျင်မြန်သောငွေထုတ်ယူမှုများ၊ အံ့သြဖွယ်သော ငွေကြေးအားဖြင့် အထောက်အပံ့ပြုထားခြင်း။",
      agent_plan_5:
        "၅။ အချိန်အတော်ကြာ လည်ပတ်ပြီး အသုံးပြုသူအရေအတွက်များပြားသော၊ ကစားသူများအကြိုက်ဖြစ်သော ကုမ္ပဏီတစ်ခု ဖြစ်ခြင်း။",
      agent_plan_6:
        "၆။ ကာစီနိုလိုင်စင်နှင့် အွန်လိုင်းလောင်းကစားလိုင်စင် နှစ်မျိုးလုံးရှိပြီး ယုံကြည်စိတ်ချရမှုကို သေချာစေခြင်း။",
      agent_plan_7:
        "၇။ နှစ်ပေါင်းများစွာ ကြော်ငြာမြှင့်တင်မှုများပြုလုပ်လာသော နိုင်ငံတကာအထိသိရှိသောအမှတ်တံဆိပ်ဖြစ်ပြီး၊ အေးဂျင့်များအနေဖြင့် Brand Advertising ၏အကျိုးကျေးဇူးများကိုခံစားနိုင်ခြင်း။",
      agent_plan_8:
        "၈။ အသေးစိတ်ဒေတာအချက်အလက်များကို တိတိကျကျကြည့်ရှုနိုင်ပြီး၊ အသုံးပြုသူများ၏ ငွေသွင်းမှုများနှင့် လောင်းကစားမှတ်တမ်းများကို စစ်ဆေးနိုင်ခြင်း။",

      provide_ptn:
        "Hualong Group သည် မိတ်ဖက်အေးဂျင့်များအတွက် အမြတ်အပြန်အလှန် အမြင့်ဆုံးနဲ့အထောက်အပံ့အပြည့်ဖြင့် ပံ့ပိုးပေးနေပါသည်။အေးဂျင့်အဖြစ် ဝင်ရောက်လိုသူများအနေနဲ့ လူမှုကွန်ယက်ဆက်သွယ်ရေးကောင်းသူ၊ သတင်းမျှဝေပေးနိုင်သူ၊ သို့မဟုတ် သီးသန့်ဖောက်သည်အုပ်စုတစ်ခုတည်ဆောက်နိုင်သူဖြစ်ပါက၊ အမြတ်တိုးတက်အောင်လုပ်ကိုင်နိုင်မည့်အခွင့်အလမ်းရရှိနိုင်ပါတယ်။ဘယ်လိုအခကြေးငွေမှ မလိုအပ်ဘဲ စတင်နိုင်ပြီး၊ ဖောက်သည်အရှုံးတွေကို သင်စဉ်းစားစရာမလိုဘဲ၊ ကျွန်ုပ်တို့ဘက်က အပြည့်အဝ တာဝန်ယူပေးမှာဖြစ်ပါတယ်။။အချိန်အပြည့် မပေးနိုင်လဲ အချိန်ပိုင်းအနေနဲ့ လုပ်ကိုင်ရင်း တည်ငြိမ်တဲ့ဝင်ငွေ တိုးပွားလာနိုင်ပါတယ်။အိပ်ရင်း ငွေဝင်တဲ့ဘဝကို စတင်လိုက်ပါ!",

      join_us:
        "ယနေ့မှစပြီး Hualong Group နှင့်အတူ အောင်မြင်တဲ့ဘဝတစ်ခုကို စတင်လိုက်ပါ။ ယုံကြည်စိတ်ချရပြီး ငွေဝင်နည်းအသစ်တစ်ခုဖြစ်ပါတယ်။",

      ptn_earn:
        "လစဉ်သန်းနဲ့ချီ အမြတ်ရဖို့ Hualong နဲ့ပူးပေါင်းလိုက်ပါ။ အခုပဲ အဖွဲ့ဝင်ဖို့ ဖိတ်ခေါ်ပါတယ်!",

      //MobileAgencyrule
      agency_rules: "အေဂျင်စီ စည်းမျဉ်းများ",
      agency_rules_intro:
        "အေဂျင်တစ်ဦးအနေနဲ့ ဝင်ငွေရှာဖို့ဆိုရင် ဖောက်သည်ရှာဖွေရေး၊ ပလက်ဖောင်းပေါ်မှာ လှုပ်ရှားမှုရှိအောင်လုပ်ပေးရတာတွေ၊ နောက်ဆုံးမှာတော့ အနိုင်အရှုံးအပေါ် မူတည်ပြီး ကော်မရှင်ယူဖို့အထိ အဆင့်တွေအများကြီးရှိပါတယ်။ အောက်မှာ ဒီလုပ်ငန်းစဉ်ကို အဆင့်လိုက်ရှင်းပြထားပါတယ်။",
      agency_rule_1:
        "1. အေဂျင်အဖြစ် စာရင်းသွင်းခြင်းနဲ့ သဘောတူညီမှုချုပ်\n   ပထမဆုံး အေဂျင်အဖြစ် စာရင်းသွင်းဖို့လိုပါတယ်။ ဒီအတွက် သဘောတူစာချုပ်တစ်ရပ် လက်မှတ်ရေးထိုးရမှာဖြစ်ပြီး၊ ကော်မရှင်နဲ့ပတ်သက်တဲ့ စည်းမျဉ်းတွေ (ဥပမာ - ကော်မရှင်နှုန်း၊ ပေးချေချိန်ကာလ) ကိုသတ်မှတ်ရပါမယ်။\n   တချို့အခြေအနေတွေမှာ ဖောက်သည်အရေအတွက် သို့မဟုတ် ဆောင်ရွက်မှုအပေါ်မူတည်ပြီး တန်းခြားနှုန်းထား (pyramid structure) ကိုလည်း သုံးကြပါတယ်။",
      agency_rule_2:
        "2. ဖောက်သည်ရှာဖွေရေး\n   လူမှုမီဒီယာ၊ ဝက်ဘ်ဆိုက်၊ ပုဂ္ဂိုလ်ရေးဖိတ်ကြားမှုတွေအပါအဝင် နည်းလမ်းအမျိုးမျိုးနဲ့ ဖောက်သည်သစ်တွေကို ဖိတ်ခေါ်ဖို့ အရေးကြီးပါတယ်။\n   ဖောက်သည်က အေဂျင်ရဲ့ invitation link သို့မဟုတ် ဖိတ်ခေါ်ကုဒ်နဲ့ register လုပ်တဲ့အခါမှာ ကိုယ်နဲ့ ချိတ်ဆက်သွားမှာ ဖြစ်ပါတယ်။",
      agency_rule_3:
        "3. ဖောက်သည်လှုပ်ရှားမှု\n   ဖောက်သည်တွေက ပလက်ဖောင်းပေါ်မှာ လှုပ်ရှားမှု (ဥပမာ - ရောင်းဝယ်မှု၊ လောင်းကစားခြင်း၊ ရင်းနှီးမြှုပ်နှံမှု) တွေလုပ်ဆောင်ပြီး နောက်ဆုံးအဖြေက အနိုင်/အရှုံးဖြစ်ပါတယ်။\n   ဒီအချက်အလက်တွေကို ပလက်ဖောင်းက real-time နဲ့ တိတိကျကျ စောင့်ကြည့်ထားပါတယ်။",
      agency_rule_4:
        "4. အနိုင်/အရှုံးတွက်ချက်မှု\n   လစဉ်အလိုက် ဖောက်သည်တွေရဲ့ အမြတ်/အရှုံးစာရင်းကို ပလက်ဖောင်းက တွက်ချက်ပေးပါတယ်။\n   သဘောတူထားတဲ့ ကော်မရှင်နည်းလမ်းအတိုင်း -\n   - ဖောက်သည်အရှုံးအပေါ်အခြေခံပြီး တွက် (ဥပမာ - အရှုံး × ၃၀%)\n   - တချို့က အမြတ်ဖြစ်တဲ့ ဖောက်သည်တွေအတွက်လည်း rebate တစ်ခုအဖြစ်ပြန်ပေးပါတယ်။",
      agency_rule_5:
        "5. တန်းခြားနှုန်းနဲ့ အဆင့်မြှင့်ကော်မရှင်\n   ဖောက်သည်တွေရဲ့ လှုပ်ရှားမှုများလာတာနဲ့အမျှ သင်ရရှိမယ့်ကော်မရှင်နှုန်းလည်း မြင့်လာနိုင်ပါတယ်။ အမြန်ဆုံးရဖို့အတွက် လုပ်ဆောင်မှုတက်ကြွဖို့လိုပါတယ်။",
      agency_rule_6:
        "6. ကော်မရှင်တွက်ချက်မှုနဲ့ ငွေသွင်းခြင်း\n   လစဉ်ပြီးတိုင်း ပလက်ဖောင်းက ဖောက်သည်အနိုင်/အရှုံးအပေါ်မူတည်ပြီး သင်ရမယ့်ကော်မရှင်ကို တွက်ပေးပါတယ်။\n   ပြီးရင် ကိုယ့်အကောင့်ထဲကို အလိုအလျောက်ထည့်ပေးမှာဖြစ်ပြီး၊ စည်းမျဉ်းအတိုင်း လွယ်လွယ်နဲ့ ငွေထုတ်လို့ရပါတယ်။",
      agency_rule_7:
        "7. စစ်ဆေးမှုနဲ့ အတည်ပြုမှု\n   ကော်မရှင်ပေးချိန်မတိုင်မီ ပလက်ဖောင်းက ဒေတာတွေစစ်ပြီး မှန်ကန်မှုရှိမရှိ စစ်ဆေးပါတယ်။\n   ကိုယ်လည်း ကော်မရှင်လက်ခံရပြီးတဲ့နောက် အကောင့်စာရင်းကိုပြန်စစ်ကြည့်နိုင်ပါတယ်။",
      agency_rule_8:
        "8. ဖောက်သည်နဲ့ ဆက်ဆံရေးထိန်းသိမ်းမှု\n   အသစ်ဖောက်သည်တွေ ဆွဲဆောင်ရင်း၊ ရှိပြီးသားဖောက်သည်တွေနဲ့လည်း ဆက်သွယ်ပြီး ပံ့ပိုးဖို့အရေးကြီးပါတယ်။\n   Backend စနစ်မှာ ကိုယ့်ဖောက်သည်တွေရဲ့ လှုပ်ရှားမှု၊ ရလာဒ်တွေအကုန်ကို တစ်ချက်ထဲမှာ စောင့်ကြည့်နိုင်ပါတယ်။",
      agency_summary:
        "လုပ်ငန်းစဉ်ကို တစ်ကြောင်းတည်းနဲ့ပြောရရင် - အေဂျင်အဖြစ် စာရင်းသွင်းခြင်း → ဖောက်သည်ခေါ်ခြင်း → ဖောက်သည် လှုပ်ရှားခြင်း → အနိုင်/အရှုံး တွက်ချက်ခြင်း → ကော်မရှင်ရရှိခြင်း။\nဒါကြောင့် အမြတ်များများရဖို့ဆိုရင် ဖောက်သည်တွေအမြဲတမ်း active ဖြစ်နေဖို့အရေးကြီးပါတယ်။",

      //MobileCredit
      reminder:
        "အသိပေးချက် - စနစ်သည်အလိုအလျောက် လက်ရှိအသုံးပြုနေတဲ့ ဂိမ်းပလက်ဖောင်းထဲကို လက်ကျန်ငွေ ပြောင်းပေးမှာဖြစ်ပါတယ်။",
      total_balance: "စုစုပေါင်းလက်ကျန်",
      total_game_balance: "ဂိမ်းအတွင်း လက်ကျန်ငွေစုစုပေါင်း",
      one_clk_transfer: "လွှဲရန်တစ်ချက်နှိပ်ပါ",
      transfer_integer: "လက်ကျန်ငွေအားလုံးကို ပလက်ဖောင်းပြန်လွှဲမယ်",
      friendly_warning:
        "လက်ကျန်ငွေအားလုံးကို ပလက်ဖောင်းကိုပြန်လွှဲချင်တာသေချာပြီလား?",
      update_balance: "လက်ကျန်ငွေအားလုံး အသစ်နဲ့ပြန်တင်မယ်",
      indicates: "နောက်ဆုံး လက်ကျန်အပြောင်းအလဲကို ပြသနေပါတယ်။",

      //MobileMessage
      leave: "သတင်းစကားပို့ရန်",
      srry_mss:
        "မင်္ဂလာပါ။ လတ်တလောမှာ ဝန်ဆောင်မှုမပေးနိုင်တာအတွက် တောင်းပန်ပါတယ်။ အကူအညီလိုအပ်နေပါက အောက်တွင် မက်ဆေ့ချ် ပေးပို့နိုင်ပါတယ်။ ကျွန်တော်တို့ အချိန်အနည်းငယ်အတွင်း ပြန်လည်ဆက်သွယ်ပါမယ်။",

      pls_enter: "ကျေးဇူးပြုပြီး ဖြည့်ပါ",
      mss_content: "မက်ဆေ့ချ်အကြောင်းအရာ",
      upload_img: "ပုံတင်ရန်",
      supp_img_type:
        "· jpg, png, gif, bmp ဖိုင်များကိုပံ့ပိုးထားပြီး၊ ပုံ ၅ ပုံအထိ တင်နိုင်ပြီး တစ်ပုံလျှင်အများဆုံး 5MB ဖြစ်ရပါမယ်။",

      //MobileMessageSuccess
      mss_success: "မက်ဆေ့ချ်ပေးပို့ပြီးပါပြီ",
      will_contact: "ကျွန်တော်တို့ မကြာမီ ပြန်လည်ဆက်သွယ်ပါမယ်",
      leave_mss: "နောက်ထပ် မက်ဆေ့ချ်တစ်ခု ပေးပို့ရန်",

      //MobilePartnership
      ptnship_plan: "ပူးပေါင်းလုပ်ကိုင်မှုအစီအစဉ်",
      enter_clk: "အွန်လိုင်းအစီအစဉ်သို့ ဝင်ရောက်ရန်နှိပ်ပါ",
      plan: "အစီအစဉ်",
      enter_contact: "ဆက်သွယ်ရန်အချက်အလက်ကို ထည့်ပါ",
      enter_reason_app: "လျှောက်ထားလိုသောအကြောင်းအရင်းကို ထည့်ပါ",
      contact_info: "ဆက်သွယ်ရန်အချက်အလက်",
      app_reason: "လျှောက်ထားမည့်အကြောင်းအရင်း",
      apply: "ပူးပေါင်းရန် လျှောက်ထားပါ",

      //MobileTransfer
      one_clk_rec: "ပြန်လည်ရယူ နှိပ်ပါ",
      game_wallet: "ဂိမ်းပိုက်ဆံအိတ်",
      more: "နောက်ထပ်",
      hide: "ဖုံးကွယ်ရန်",
      auto_transfer: "အလိုအလျောက်လွှဲပြောင်းမှု",
      not_supp_wallet:
        "ဤနေရာရှိ ပိုက်ဆံအိတ်များသည် အပြန်အလှန် လွှဲပြောင်းခြင်းကို ပံ့ပိုးမထားပါ",
      max_amount: "အများဆုံးပမာဏ",
      transfer_now: "ယခုလွှဲပြောင်းပါ",
      need_help: "အကူအညီလိုအပ်ပါက",
      pls_contact: "ဖောက်သည်ဝန်ဆောင်မှုကို ဆက်သွယ်ပါ",

      // patternLockSetting
      confirm_ur_pass: "သင့်စကားဝှက်ကို အတည်ပြုပါ",
      on: "ဖွင့်",
      off: "ပိတ်",
      ges_lock_on_off: " လော့ခ် ဖွင့်/ပိတ် geture",
      set_ges_lock: "သင့်gesture လော့ခ်ကို သတ်မှတ်ပါ",
      Forg_ges_pass: "gesture စကားဝှက်ကို မေ့နေပါသလား",

      //validBetAmount
      valid_bet_amount: "လောင်းကြေးသတ်မှတ်ရန်",
      payout: "အနိုင်ငွေ",
      game_lobby: "ဂိမ်းခန်းမ",
      no_data: "ဒေတာမရှိပါ",

      //DragImage
      user_signin: "အသုံးပြုသူ အကောင့် ဝင်မည်",
      lucky_draw: "Lucky Draw",

      //activity
      ur_reward: "သင့်ဆုလာဘ်",
      await_reward: "သင်ကို အံ့အားသင့်စရာဆုများစောင့်ဆိုင်းနေပါသည်",
      under_review: "စစ်ဆေးမှုလုပ်နေပါသည်",
      approved: "အတည်ပြုသည်",
      signin_reward: "လော့ဂ်အင်ဆုလာဘ်",
      task: "တာဝန်များ",
      activ: "လှုပ်ရှားမှုများ",
      view: "ကြည့်ရှုပါ",

      //AddBAnkPopUp
      convert: "RMB ဖြင့်ပြောင်းရန်",
      reference_rate: "ကိုးကားနှုန်း",

      //welcome
      enter_web: "ဝဘ်ဆိုက်သို့ဝင်ပါ",
      download_app: "အက်ပ်ဒေါင်းလုတ်လုပ်ရန်",
      exclu_browser: "အထူးဘရောက်ဇာ",
      online_supp: "အွန်လိုင်းအကူအညီ",
      provider: "ဂိမ်းပံ့ပိုးသူ",
      selec: "ရွေးချယ်ပါ",
      ges_login: "လော့ဂ်အင်",
      username_pass: "အသုံးပြုသူနာမည်နှင့်စကားဝှက်ဖြင့်လော့ဂ်အင်",
      wel_hualong_entertain: "Hualong ဂိမ်းရုံမှကြိုဆိုပါသည်",
      inv_code: "ဖိတ်ခေါ် ကုဒ်",
      go_to_official_web: "တရားဝင်ဝဘ်ဆိုက်သို့သွားပါ",
      blind_box: "အမြင်မရသောဘောခ်",
      industryNativeApp: "စီးပွားရေးဧရိယာအဆင့်မြင့်နေပေါ်ထွက်သည့်Native App",
      signature:
        "မြင့်မားသောအပိုင်းအစ၊ ကစားရန်မျိုးစုံ၊ ငွေလွှဲအမြန်နှုန်းများနှင့် အမြင့်ဆုံးလုံခြုံမှု",
      hualong_intro:
        "Hualong Group သည် ကမ္ဘာတစ်လွှားအကြီးဆုံးအွန်လိုင်းဂိမ်းလုပ်ငန်းရဲ့ အများပြည်သူလက်မှတ်ရရှိထားသောကုမ္ပဏီဖြစ်သည်။ ၎င်းသည် Isle of Man အစိုးရမှ လိုင်စင်ရရှိထားပြီး Isle of Man Gambling Supervision Commission မှ Online Gambling Act 2001 (2015၊ ဒီဇင်ဘာလ 21 ရက်) အောက်တွင် စီမံခန့်ခွဲနေပါသည်။ ယခုအချိန်တွင် ၃၀ မီလီယံကျော်သောဖောက်သည်များကို ပိုင်ဆိုင်ပြီး ဝန်ထမ်းများ၏စုစုပေါင်းအရေအတွက် ၃,၀၀၀ ကျော်ရှိပါသည်။ Hualong Group ၏ဖွဲ့စည်းတည်ထောင်မှုသည် လက်ရှိဂိမ်းစျေးကွက်အပေါ်မှ စုစည်းထားသောအမြင်များအပေါ်တည်ဆောက်ထားပြီး ဖောက်သည်များ၏အမြင်ကိုအလေးထားပါသည်။ ၎င်းသည် အသုံးပြုသူများကို နောက်ဆုံးပေါ်နှင့် အကောင်းဆုံးဝန်ဆောင်မှုများနှင့်ဂိမ်းကစားမှုအတွေ့အကြုံများကိုပေးအပ်ရန် အထူးစိတ်ပါဝင်စားနေပါသည်။ ယခင်ထိပ်တန်းစိတ်ကူးများနှင့်အစီအစဉ်များကိုဖောက်သည်အတွေ့အကြုံထဲတွင်ပေါင်းစပ်၍ ဂိမ်းလုပ်ငန်းတွင်ထားရှိသောအတွေးအမြင်များကိုပြောင်းလဲရန်ရည်ရွယ်ပြီး ထပ်မံတိုးတက်အောင်လုပ်ဆောင်နေပါသည်။",
      fish_game: "ငါးပစ်ဂိမ်း",
      latest: "နောက်ဆုံးပေါ်",
      select_end_time: "အဆုံးသတ်ချိန်ကိုရွေးပါ",
      gender: "ကျား/မ",
      id_card_province: "အိုင်ဒီကဒ်ပရိုဗင့်စ်",
      id_card_city: "အိုင်ဒီကဒ်မြို့",
      ph_no_area_code: "ဖုန်းနံပါတ်ဒေသကုဒ်",
      totalValidBetAmount: "စုစုပေါင်းမှန်ကန်သောဘတ်ငွေ",
      win_lose: "စုစုပေါင်းအနိုင်/အရှုံးငွေ",

      //dash
      mobileOperator: "မိုဘိုင်းကွန်ယက်အော်ပရေးတာ",
      telecommu_operator: "တယ်လီကော်မ్యూనီကေးရှင်းအော်ပရေးတာ",
      mobileCarrier: "မိုဘိုင်းဆက်သွယ်ရေးကုမ္ပဏီ",
      promote_short: "တိုတောင်း URL များကိုတိုးချဲ့ပေးပါ",
      bet_status: "ပေါင်းတင်မှုအခြေအနေ",
      refunded: "ပြန်အမ်းခဲ့သည်",
      not_refunded: "မပြန်အမ်းရသေးပါ",

      //slotbackup
      previous: "ရှေ့သို့",
      next: "နောက်သို့",
      postedBy: "postတင်သူ",
      enterGameName: "ဂိမ်းအမည်ထည့်ပါ",
      eventTime: "ပွဲအချိန်",
      from: "",
      check_in: "ဝင်မည်",

      // creditweb
      game_balance: "ဂိမ်းလက်ကျန်ငွေ",
      mostRecent: "မကြာသေးမီက",

      redrawPassword: "စကားဝှက်",
      skip: "ကျော်ရန်",

      // MobileHotPopup
      confirmYourOldGesturePassword: "စကားဝှက်အဟောင်းကို အတည်ပြုပါ",
      pleaseSetAGesturePassword: "စကားဝှက်ကို သတ်မှတ်ပါ",
      youHaveNotSetaGesturePassword: "သင်သည် စကားဝှက်ကို သတ်မှတ်ထားခြင်းမရှိပါ",
      confirmYourGesturePassword: "သင်၏စကားဝှက်ကို အတည်ပြုပါ",
      changeYourGesturePassword: "သင်၏စကားဝှက်ကို ပြောင်းပါ",
      incorrectGesturePassword:
        "စကားဝှက်မှားယွင်းနေပါသည်၊ ကျေးဇူးပြု၍ ထပ်မံကြိုးစားပါ",
      firstPasswordConfirm:
        "ဤသည် သင်၏စကားဝှက်ကို သတ်မှတ်ခြင်းဖြစ်သည်၊ ကျေးဇူးပြု၍ ထပ်မံအတည်ပြုပါ",
      passwordDoNotMatch:
        "စကားဝှက်နှစ်ခုသည် ကိုက်ညီမှုမရှိပါ၊ ကျေးဇူးပြု၍ ထပ်မံထည့်ပါ",
      enterOfficalWebsite: "ကျေးဇူးပြု၍ တရားဝင်ဝက်ဘ်ဆိုက်ကို ရိုက်ထည့်ပါ",
      checking: "စစ်ဆေးနေပါသည်",
      enterNow: "ယခုဝင်ပါ",
      promotionServiceHall: "ပရိုမိုးရှင်းဝန်ဆောင်မှုခန်းမ",
      mysteryBox: "အံ့ဩစရာသေတ္တာ",
      onlineCustomerService: "အွန်လိုင်းဖောက်သည်ဝန်ဆောင်မှု",
      copyRight: "COPYRIGHT © HUALONG GROUP CO., LTD.",
      freeRegistration: "အခမဲ့မှတ်ပုံတင်ခြင်း",
      hualongBrowser: "Hualong Browser",
      hualongEntertainment: "Hualong ဖျော်ဖြေရေး",
      mostApp: "အထင်ကရဆုံး App ကိုရရှိနိုင်ပါပြီ။",
      exclusiveBrowser: "Exclusive Browser",
      upgrateAndMaintain:
        "ပလက်ဖောင်းသည် upgrade နှင့်ထိန်းသိမ်းမှုကို လက်ရှိလုပ်ဆောင်နေသည်။",
      comeBackAndCheck: "ကျေးဇူးပြု၍ ပြန်လာပြီး ထပ်မံစစ်ဆေးပါ။",
      bonusAmount: "အထူးဆုကြေးငွေ",
      bomusEvery6th: "အထူးဆုကြေးငွေကို ၆ ရက်တိုင်းရရှိပါသည်။",
      claimedAmount: " ၁ ကျပ်ထက်နည်းသောငွေပမာဏများကို ရရှိမရပါ။",
      requestWaitingTime:
        "အရေအတွက်များမလုံလောက်ပါ။ ကျေးဇူးပြု၍ ၃ စက္ကန့်အကြာတွင် ထပ်မံကြိုးစားပါ။",
      startingDate: "စတင်ရက်စွဲ သည် 2024/02/10 မှစတင်ပါသည်။",
      millionWin: "အောင်မြင်မှုကြီးများနှင့်အတူ သန်းချီငွေများကို ရရှိပါစေ။",
      grabNow: "ယခု လက်ခံရယူပါ",
      getReward: "ဆုငွေယူပါ။",
      event: "အခမ်းအနား",
      details: "အသေးစိတ်",
      totalTopUp: "စုစုပေါင်းထည့်သွင်းမှုငွေပမာဏ",
      cumulativeRecharge: "စုစုပေါင်းထည့်သွင်းမှု",
      nonCumulativeRecharge: "စုစုပေါင်းမထည့်သွင်းမှု",
      totalWithdrawalAmount: "စုစုပေါင်းထုတ်ယူမှုငွေပမာဏ",
      totalRebateAmount: "စုစုပေါင်းအခွန်ငွေပမာဏ",
      totalAmountGiftedfromPromotions: "ပရိုမိုးရှင်းများမှ လက်ဆောင်ငွေပမာဏ",
      vipRechargeRewards: "VIP ထပ်လောင်းဆုလာဘ်များ",
      vipJournalAmount: "VIP ဂျာနယ် ပမာဏ",
      vipJournalWeekAmount: "VIP ဂျာနယ် အပတ်စဉ် ပမာဏ",
      vipJournalMonthAmount: "VIP ဂျာနယ် လစဉ် ပမာဏ",
      recommendRewardAmount: "အကြံပြုမှုဆုလာဘ်ပမာဏ",
      signatureRewardAmount: "လက်မှတ်ဆုလာဘ်ပမာဏ",
      promotionalGiveaways: "ပရိုမိုးရှင်းလက်ဆောင်များ",
      vip_recharge_amount_direct_member:
        "VIP ထပ်လောင်းငွေပမာဏ (တိုက်ရိုက်အဖွဲ့ဝင်)",
      vip_journal_amount_direct_member: "VIP ဂျာနယ် ပမာဏ (တိုက်ရိုက်အဖွဲ့ဝင်)",
      vip_journal_week_amount_direct_member:
        "VIP ဂျာနယ် အပတ်စဉ် ပမာဏ (တိုက်ရိုက်အဖွဲ့ဝင်)",
      vip_journal_month_amount_direct_member:
        "VIP ဂျာနယ် လစဉ် ပမာဏ (တိုက်ရိုက်အဖွဲ့ဝင်)",
      recommend_reward_amount_direct_member:
        "အကြံပြုမှုဆုလာဘ်ပမာဏ (တိုက်ရိုက်အဖွဲ့ဝင်)",
      signature_reward_amount_direct_member:
        "လက်မှတ်ဆုလာဘ်ပမာဏ (တိုက်ရိုက်အဖွဲ့ဝင်)",
      noUsername: "အသုံးပြုသူအမည်ထည့်ပါ",
      back: "ပြန်သွားမည်",
      total_recharged_amount_team: "စုစုပေါင်း ထည့်သွင်းငွေပမာဏ (အသင်း)",
      cumulative_recharged_amount_team: "စုစုပေါင်း ထည့်သွင်းငွေပမာဏ (အသင်း)",
      non_cumulative_recharged_amount_team:
        "မစုစုပေါင်း ထည့်သွင်းငွေပမာဏ (အသင်း)",
      total_withdrawn_amount_team: "စုစုပေါင်း ထုတ်ယူငွေပမာဏ (အသင်း)",
      total_rebated_amount_team: "စုစုပေါင်း ပြန်အမ်းငွေပမာဏ (အသင်း)",
      activity_amount_team: "လှုပ်ရှားမှုငွေပမာဏ (အသင်း)",
      vip_recharge_amount_team: "VIP ထည့်သွင်းငွေပမာဏ (အသင်း)",
      vip_journal_amount_team: "VIP ဂျာနယ်ငွေပမာဏ (အသင်း)",
      vip_journal_week_amount_team: "VIP ဂျာနယ် အပတ်စဉ်ငွေပမာဏ (အသင်း)",
      vip_journal_month_amount_team: "VIP ဂျာနယ် လစဉ်ငွေပမာဏ (အသင်း)",
      recommend_reward_amount_team: "အကြံပြုဆုလာဘ်ငွေပမာဏ (အသင်း)",
      signature_reward_amount_team: "လက်မှတ်ဆုလာဘ်ငွေပမာဏ (အသင်း)",
      justBrowsing: "Browsing လုပ်ရုံပါပဲ။",
      fieldMarked: "* ဖြင့် အမှတ်အသားပြုထားသည့် အကွက်များ လိုအပ်သည်။",
      withdrawPasswordRequired:
        "ထုတ်ယူသည့်ပမာဏအတွက် အတည်ပြုချက်တစ်ခုအနေဖြင့် ငွေထုတ်ရန်စကားဝှက်ကို လိုအပ်ပါသည်။ အချက်အလက်အားလုံးကို တိကျစွာ ဖြည့်သွင်းထားကြောင်း သေချာပါစေ။",
      viaEmail:
        "အခြား ပရိုမိုးရှင်းများ ရှိပါက အီးမေးလ်မှတဆင့် အကြောင်းကြားပါမည်။ ကျေးဇူးပြု၍ မှန်ကန်ပြီး ပြည့်စုံသော အီးမေးလ်လိပ်စာကို ပေးပါ။",
      loginRegister: "Login / Register",
      failedImage: "ပုံ CAPTCHA အကြိမ်များစွာ မအောင်မြင်ပါ။",
      getVerificationCode: "အတည်ပြုကုဒ်ကို ရယူပါ။",
      usernameEmpty: "userName မရှိပါ",
      passwordEmpty: "password မရှိပါ",
      confirmPasswordEmpty: "confirmPassword မရှိပါ",
      realnameEmpty: "realName မရှိပါ",
      verificationCodeRequired: "အတည်ပြုကုဒ် လိုအပ်ပါသည်။",
      confirmPaymentPasswordEmpty: "အတည်ပြုငွေထုတ်ရန် စကားဝှက် မရှိပါ",
      agreeTermsConditions: "Terms and Conditions ကို သဘောတူပါသည်။",
      compareStardateEnddate: "စတင်ရက်စွဲသည် အဆုံးရက်စွဲထက် ပိုမိုမကြီးရပါ။",
      yourReward: "သင်၏ဆု",
      valueReward: "သင်၏ဆုကြေးငွေများကို လက်ခံရယူပါ။",
      agentName: "အေဂျင့်အမည်",
      agentPassword: "အေဂျင့်စကားဝှက်",
      phoneNumberEmpty: "ဖုန်းနံပါတ် မရှိပါ",
      match: "ကိုက်ညီမှု",
      notMatched: "မကိုက်ညီပါ",
      verificationCodeNotMatch: "အတည်ပြုကုဒ် မကိုက်ညီပါ",
      accountingAgentcy: "စာရင်းကိုင်အေဂျင်စီ",
      file: "ဖိုင်",
      selectStartTime: "စတင်ချိန်ကို ရွေးပါ",
      selectEndTime: "အဆုံးသတ်သတ်ချိန်ကို ရွေးပါ",
      IDCardProvince: "အိုင်ဒီကတ် Provinces",
      IDCardCity: "အိုင်ဒီကတ်",
      number_province: "အိုင်ဒီကတ်နံပါတ်",
      number_city: "မြို့နယ်အိုင်ဒီကတ်နံပါတ်",
      carrier: "ဆက်သွယ်ရေးကုမ္ပဏီ",
      numberOperator: "နံပါတ်အော်ပရေတာ",
      city_name: "မြို့နယ်အမည်",
      promotionalShortURL: "ပရိုမိုးရှင်း ShortURL",
      bettingStatus: "အကာအကွယ်အခြေအနေ",
      totalEffectiveBetAmount: "စုစုပေါင်း Effective Bet Amount",
      dividend: "အခွင့်အရေး",
      totalWinLossAmount: "စုစုပေါင်း အနိုင်/အရှုံး ပမာဏ",
      withdrawalCount: "ထုတ်ယူမှုအရေအတွက်",
      totalSubordinateWinLossAmount:
        "စုစုပေါင်း Subordinate အနိုင်/အရှုံး ပမာဏ",
      startGame: "ဂိမ်းစတင်ပါ",
      takeAGamble: "အကောင်းဆုံးအခွင့်အရေးကို လက်လွှတ်မခံပါနဲ့",
      recommendated: "အကြံပြုချက်",
      luckyMoney: "ကံကောင်းဖို့ငွေ",

      // MobileActivityMemberCard
      activity_time: "လှုပ်ရှားချိန်:",
      start: "စတင်",
      domesticDownload: "'ပြည်တွင်းဒေါင်းလုဒ်' ကိုရွေးချယ်ပါ။",
      overseasDownload: "'ပြင်ပဒေါင်းလုဒ်' ကိုရွေးချယ်ပါ။",

      unclaimed: "မသုံးရသေးတဲ့ငွေ",
      transaction1: "",
      totaltext: "စုစုပေါင်း",
      claimAll: "အားလုံးကို ရယူပါ",

      backupCustomerService: "အထောက်အကူပြုဖောက်သည်ဝန်ဆောင်မှု",
      hualongLogin: "Hualong မှတ်တမ်းဝင်ရန်",
      gestureLogin: "ကစားသမား မှတ်တမ်းဝင်ရန်",
      usernamePasswordLogin:
        "အသုံးပြုသူအမည် နှင့် စကားဝှက်ဖြင့် မှတ်တမ်းဝင်ရန်",

      disbursementRecords: " ငွေပေးချေမှုမှတ်တမ်းများ",
      pgSlotLuckyBetBonus1028: " PG Slot လက်ဆောင် (1028)",
      slotNo5RescueBonus1028: " Slot No.5 – လက်ဆောင် (1028)",

      transactionsDisbursed7: " 7 ငွေပေးချေမှု (စုစုပေါင်း 101.00 ယွမ်)",
      transactionsDisbursed78: " 78 ငွေပေးချေမှု (စုစုပေါင်း 591.81 ယွမ်)",
      rewards: "ဆုလာဘ်",
      coding1: "1x ကုဒ်",

      // account
      account_address: "လိပ်စာ :",

      // API reponse
      mobileHome: "ရှေ့စာမျက်နှာ",
      moibleActivity: "ကမ်းလှမ်းချက်",
      mine: "ကျွန်ုပ်",
      discount: "လျှော့စျေး",
      customerService: "ဧည့်ဝန်ဆောင်မှု",
      mobileRecharge: "ငွေဖြည့်",
      mobileWithdrawl: "ရုပ်သိမ်း",
      mobileWallet: "ပိုက်ဆံအိတ်စီမံခန့်ခွဲမှု",
      mobileCredit: "အကြွေးပြောင်းခြင်း",
      mobileRebate: "သက်သာချောင်ချိရေး",
      video: "ဗီဒီယို",

      login: "လော့ဂ်အင်",
      register: "မှတ်ပုံတင်",

      fullscreen: "Full Screen",

      // missing key added
      mobileInfo: "default_value",
      basicInfo: "default_value",
      modifyBasicInfo: "default_value",
      from: "default_value",
      transaction1: "default_value",
      withdraw_pw: "default_value",
      notice: "default_value",
      set_withdraw_pw: "default_value",
      confirm_withdraw_pw: "default_value",
      note: "default_value",
      task_app: "default_value",
      task_progr: "default_value",
      acti_time: "default_value",
      raise: "default_value",
      applyforbonus: "default_value",
      pratic: "default_value",
      submit_now: "default_value",
      no_info: "default_value",
      logInRedPocket: "default_value",
      drawRedPocket: "default_value",
      headPlaza: "default_value",
      own_agency: "default_value",
      team_agency: "default_value",
      datefrom: "default_value",
      dateto: "default_value",
    }
 

  let data = {}
  for(const key in en){
    if(!myan[key]){
        data[key] = 'default_value'
    }
     
  }
  return res.status(200).json({data})
}