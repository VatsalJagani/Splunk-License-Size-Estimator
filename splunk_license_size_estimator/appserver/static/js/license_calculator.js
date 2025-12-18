require([
    'jquery',
    'splunkjs/ready!'
], function($) {
    
    // Calculation formulas (at environment size = 5)
    const FORMULAS = {
        windows: { servers: 10, gb: 1 },          // 10 servers = 1 GB
        sysmon: { servers: 10, gb: 2 },           // 10 servers = 2 GB
        linux: { servers: 10, gb: 1 },            // 10 servers = 1 GB
        ad: { users: 100, gb: 1 },                // 100 users = 1 GB
        firewalls: { count: 1, gb: 3 },           // 1 firewall = 3 GB
        waf: { count: 1, gb: 3 },                 // 1 WAF = 3 GB
        switches: { count: 5, gb: 1 }             // 5 switches = 1 GB
    };
    
    const BASE_ENV_SIZE = 5; // Base environment size for the formulas
    
    function calculateDataSize() {
        let totalSize = 0;
        let breakdown = [];
        
        // Get environment size multiplier
        const envSize = parseInt($('#env_size').val(), 10);
        const envMultiplier = envSize / BASE_ENV_SIZE;
        
        // Windows
        if ($('#windows_enabled').is(':checked')) {
            const count = parseFloat($('#windows_count').val()) || 0;
            const size = (count / FORMULAS.windows.servers) * FORMULAS.windows.gb * envMultiplier;
            if (size > 0) {
                totalSize += size;
                breakdown.push(`Windows Servers: ${size.toFixed(2)} GB/day`);
            }
        }
        
        // Sysmon
        if ($('#sysmon_enabled').is(':checked')) {
            const count = parseFloat($('#sysmon_count').val()) || 0;
            const size = (count / FORMULAS.sysmon.servers) * FORMULAS.sysmon.gb * envMultiplier;
            if (size > 0) {
                totalSize += size;
                breakdown.push(`Sysmon for Windows: ${size.toFixed(2)} GB/day`);
            }
        }
        
        // Linux
        if ($('#linux_enabled').is(':checked')) {
            const count = parseFloat($('#linux_count').val()) || 0;
            const size = (count / FORMULAS.linux.servers) * FORMULAS.linux.gb * envMultiplier;
            if (size > 0) {
                totalSize += size;
                breakdown.push(`Linux Servers: ${size.toFixed(2)} GB/day`);
            }
        }
        
        // Active Directory
        if ($('#ad_enabled').is(':checked')) {
            const count = parseFloat($('#ad_count').val()) || 0;
            const size = (count / FORMULAS.ad.users) * FORMULAS.ad.gb * envMultiplier;
            if (size > 0) {
                totalSize += size;
                breakdown.push(`Active Directory: ${size.toFixed(2)} GB/day`);
            }
        }
        
        // Firewalls
        if ($('#firewalls_enabled').is(':checked')) {
            const count = parseFloat($('#firewalls_count').val()) || 0;
            const size = (count / FORMULAS.firewalls.count) * FORMULAS.firewalls.gb * envMultiplier;
            if (size > 0) {
                totalSize += size;
                breakdown.push(`Firewalls: ${size.toFixed(2)} GB/day`);
            }
        }
        
        // WAF
        if ($('#waf_enabled').is(':checked')) {
            const count = parseFloat($('#waf_count').val()) || 0;
            const size = (count / FORMULAS.waf.count) * FORMULAS.waf.gb * envMultiplier;
            if (size > 0) {
                totalSize += size;
                breakdown.push(`WAF: ${size.toFixed(2)} GB/day`);
            }
        }
        
        // Switches
        if ($('#switches_enabled').is(':checked')) {
            const count = parseFloat($('#switches_count').val()) || 0;
            const size = (count / FORMULAS.switches.count) * FORMULAS.switches.gb * envMultiplier;
            if (size > 0) {
                totalSize += size;
                breakdown.push(`Switches: ${size.toFixed(2)} GB/day`);
            }
        }
        
        // Update display
        $('#total_size').text(totalSize.toFixed(2));
        
        // Update breakdown
        if (breakdown.length > 0) {
            $('#breakdown').html('<h4>Breakdown:</h4><ul>' + 
                breakdown.map(item => '<li>' + item + '</li>').join('') + 
                '</ul>');
        } else {
            $('#breakdown').html('<p class="no-data">No data sources selected</p>');
        }
    }
    
    function setupEventHandlers() {
        // Checkbox handlers - show/hide number inputs
        $('#windows_enabled').change(function() {
            $('#windows_input_container').toggle(this.checked);
            if (!this.checked) $('#windows_count').val(0);
            calculateDataSize();
        });
        
        $('#sysmon_enabled').change(function() {
            $('#sysmon_input_container').toggle(this.checked);
            if (!this.checked) $('#sysmon_count').val(0);
            calculateDataSize();
        });
        
        $('#linux_enabled').change(function() {
            $('#linux_input_container').toggle(this.checked);
            if (!this.checked) $('#linux_count').val(0);
            calculateDataSize();
        });
        
        $('#ad_enabled').change(function() {
            $('#ad_input_container').toggle(this.checked);
            if (!this.checked) $('#ad_count').val(0);
            calculateDataSize();
        });
        
        $('#firewalls_enabled').change(function() {
            $('#firewalls_input_container').toggle(this.checked);
            if (!this.checked) $('#firewalls_count').val(0);
            calculateDataSize();
        });
        
        $('#waf_enabled').change(function() {
            $('#waf_input_container').toggle(this.checked);
            if (!this.checked) $('#waf_count').val(0);
            calculateDataSize();
        });
        
        $('#switches_enabled').change(function() {
            $('#switches_input_container').toggle(this.checked);
            if (!this.checked) $('#switches_count').val(0);
            calculateDataSize();
        });
        
        // Number input handlers
        $('.count-input').on('input', calculateDataSize);
        
        // Slider handler
        $('#env_size').on('input', function() {
            $('#env_size_value').text($(this).val());
            calculateDataSize();
        });
    }
    
    // Initialize on page load
    $(document).ready(function() {
        setupEventHandlers();
        calculateDataSize();
    });
});
